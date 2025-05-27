function createNavbar(data) {
    const header = createElement('header', { class: 'header' }, document.body);
    const nav = createElement('nav', { class: 'nav container' }, header);
    const controllers = createElement('div', { class: 'nav__data' }, nav);
    const title = createElement('a', { class: 'nav__logo', href: data.navbarTitle.href }, controllers);
    const titleIcon = createElement('span', {}, title);
    titleIcon.innerHTML = data.navbarTitle.icon; //replace icon
    title.appendChild(document.createTextNode(data.navbarTitle.text)); 
    const controlElements = createElement('div', { class: 'nav__toggle', id: 'nav-toggle' }, controllers);

    const menuIcon = createElement('span', { class: 'nav__toggle-menu' }, controlElements);
    menuIcon.innerHTML = data.controls.openNavbar;

    const closeIcon = createElement('span', { class: 'nav__toggle-close' }, controlElements);
    closeIcon.innerHTML = data.controls.closeNavbar;
}