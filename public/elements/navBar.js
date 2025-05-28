function createNavbar(data) {
    const header = createElement('header', { class: 'header' }, document.body);
    const nav = createElement('nav', { class: 'nav container' }, header);
    const controllers = createElement('div', { class: 'nav__data' }, nav);
    const title = createElement('a', { class: 'nav__logo', href: data.navbarTitle.href }, controllers);
    const titleIcon = createElement('span', {}, title);
    titleIcon.innerHTML = data.navbarTitle.icon;
    title.appendChild(document.createTextNode(data.navbarTitle.text));
    const controlElements = createElement('div', { class: 'nav__toggle', id: 'nav-toggle' }, controllers);
    const menuIcon = createElement('span', { class: 'nav__toggle-menu' }, controlElements);
    menuIcon.innerHTML = data.controls.openNavbar;
    const closeIcon = createElement('span', { class: 'nav__toggle-close' }, controlElements);
    closeIcon.innerHTML = data.controls.closeNavbar;

    const menu = createElement('div', { class: 'nav__menu', id: 'nav-menu' }, nav);
    const ul = createElement('ul', { class: 'nav__list' }, menu);

    const roots = prepareMenuTree(data.elements);
    buildMenu(roots, ul);
    initToggleMenu();
    initDropdowns();
    initResizeHandler();
}

function prepareMenuTree(elements) {
    const map = new Map();
    const roots = [];

    for (let i = 0; i < elements.length; i++) {
        const el = elements[i];
        map.set(el.id, {
            id: el.id,
            parent: el.parent,
            text: el.text,
            title: el.title,
            href: el.href,
            icon: el.icon,
            children: []
        });
    }

    const keys = Array.from(map.keys());
    for (let i = 0; i < keys.length; i++) {
        const item = map.get(keys[i]);
        if (item.parent === null) {
            roots.push(item);
        } else {
            const parent = map.get(item.parent);
            if (parent) {
                parent.children.push(item);
            }
        }
    }

    return roots;
}

function buildMenu(items, parentElement) {
    for (let i = 0; i < items.length; i++) {
        const item = items[i];

        if (item.text && item.children.length === 0) {
            const li = createElement('li', {}, parentElement);
            const a = createElement('a', { class: 'nav__link', href: item.href || '#' }, li);
            a.textContent = item.text;
        }

        else if (item.text && item.children.length > 0) {
            const li = createElement('li', { class: 'dropdown__item' }, parentElement);
            const div = createElement('div', { class: 'nav__link dropdown__button' }, li);
            div.innerHTML = item.text + ' ' + (item.icon || '');
            const dropdownContainer = createElement('div', { class: 'dropdown__container' }, li);
            const dropdownContent = createElement('div', { class: 'dropdown__content' }, dropdownContainer);
            buildMenu(item.children, dropdownContent);
        }

        else if (item.title && item.children.length > 0) {
            const group = createElement('div', { class: 'dropdown__group' }, parentElement);
            const iconDiv = createElement('div', { class: 'dropdown__icon' }, group);
            iconDiv.innerHTML = item.icon || '';
            const span = createElement('span', { class: 'dropdown__title' }, group);
            span.textContent = item.title;
            const ul = createElement('ul', { class: 'dropdown__list' }, group);

            for (let j = 0; j < item.children.length; j++) {
                const child = item.children[j];
                const li = createElement('li', {}, ul);
                const a = createElement('a', { class: 'dropdown__link', href: child.href || '#' }, li);
                a.textContent = child.text;
            }
        }
    }
}

function initToggleMenu() {
    const toggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (toggle && navMenu) {
        toggle.addEventListener('click', function() {
            const isShown = navMenu.classList.contains('show-menu');
            navMenu.classList.toggle('show-menu', !isShown);
            toggle.classList.toggle('show-icon', !isShown);

            if (isShown) {
                const openDropdowns = document.querySelectorAll('.dropdown__item.show-dropdown');
                for (let i = 0; i < openDropdowns.length; i++) {
                    toggleItem(openDropdowns[i]);
                }
            }
        });
    }
}

function initDropdowns() {
    const items = document.querySelectorAll('.dropdown__item');
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        const button = item.querySelector('.dropdown__button');
        if (!button) continue;

        button.addEventListener('click', function() {
            const current = document.querySelector('.show-dropdown');
            toggleItem(item);
            if (current && current !== item) {
                toggleItem(current);
            }
        });
    }
}

function toggleItem(item) {
    const container = item.querySelector('.dropdown__container');
    const isShown = item.classList.contains('show-dropdown');

    if (isShown) {
        container.removeAttribute('style');
        item.classList.remove('show-dropdown');
    } else {
        container.style.height = container.scrollHeight + 'px';
        item.classList.add('show-dropdown');
    }
}

function initResizeHandler() {
    const mediaQuery = matchMedia('(min-width: 1118px)');

    function removeDropdownStyles() {
        if (mediaQuery.matches) {
            const containers = document.querySelectorAll('.dropdown__container');
            const items = document.querySelectorAll('.dropdown__item');
            for (let i = 0; i < containers.length; i++) {
                containers[i].removeAttribute('style');
            }
            for (let j = 0; j < items.length; j++) {
                items[j].classList.remove('show-dropdown');
            }
        }
    }

    addEventListener('resize', removeDropdownStyles);
}
