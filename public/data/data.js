const path = "";
let currentLanguage = 'en';

const controlIcons = {
    openNavbar: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
</svg>`,
    closeNavbar: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
</svg>`,
    arrowDown: `<svg class="dropdown__arrow" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="16" height="16">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
</svg>`,
    flashlight: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="16" height="16">
    <path d="M12 2v6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="12" cy="14" r="4" stroke="currentColor" stroke-width="2" />
  </svg>`,
    heart3: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="16" height="16">
    <path d="M12 21C12 21 7 17 5 12c-2-5 3-8 7-5 4-3 9 0 7 5-2 5-7 9-7 9z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,
    bookmark: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="16" height="16">
    <path d="M6 4h12v16l-6-4-6 4V4z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
  </svg>`,
    filePaper: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="16" height="16">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
    <path d="M14 2v6h6" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
  </svg>`,
    codeLine: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="16" height="16">
    <path d="M16 18l6-6-6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M8 6l-6 6 6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,
    penNib: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="16" height="16">
    <path d="M12 20l9-9-4-4-9 9v4h4z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
  </svg>`,
    apps2Line: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="16" height="16">
    <rect x="3" y="3" width="7" height="7" stroke="currentColor" stroke-width="2" />
    <rect x="14" y="3" width="7" height="7" stroke="currentColor" stroke-width="2" />
    <rect x="14" y="14" width="7" height="7" stroke="currentColor" stroke-width="2" />
    <rect x="3" y="14" width="7" height="7" stroke="currentColor" stroke-width="2" />
  </svg>`,
    communityLine: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="16" height="16">
    <circle cx="12" cy="7" r="4" stroke="currentColor" stroke-width="2"/>
    <path d="M5.5 21a8 8 0 0 1 13 0" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
  </svg>`,
    shieldLine: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="16" height="16">
    <path d="M12 2l8 4v6c0 5-3.58 9-8 9s-8-4-8-9V6l8-4z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
  </svg>`
};

const webData = {
    title: "PumpOrDump",
    icon: path + "/assets/img/ico.png",
    navbar: {
        navbarTitle: {
            text: 'PumpOrDump',
            href: '#',
            icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>`,
        },
        controls: {
            openNavbar: controlIcons.openNavbar,
            closeNavbar: controlIcons.closeNavbar,
        },
        elements: [
            { id: 1, text: 'Account', href: '#', parent: null },

            { id: 2, text: 'Discover', icon: controlIcons.arrowDown, parent: null },
            { id: 3, title: 'Most viewed courses', icon: controlIcons.flashlight, parent: 2 },
            { id: 4, text: 'HTML for beginners', href: '#', parent: 3 },
            { id: 5, text: 'Advanced CSS', href: '#', parent: 3 },
            { id: 6, text: 'JavaScript OOP', href: '#', parent: 3 },
            { id: 7, title: 'Popular courses', icon: controlIcons.heart3, parent: 2 },
            { id: 8, text: 'Development with Flutter', href: '#', parent: 7 },
            { id: 9, text: 'Web development with React', href: '#', parent: 7 },
            { id: 10, text: 'Backend development expert', href: '#', parent: 7 },
            { id: 11, title: 'Careers', icon: controlIcons.bookmark, parent: 2 },
            { id: 12, text: 'Web development', href: '#', parent: 11 },
            { id: 13, text: 'Applications development', href: '#', parent: 11 },
            { id: 14, text: 'UI/UX design', href: '#', parent: 11 },
            { id: 15, text: 'Informatic security', href: '#', parent: 11 },
            { id: 16, title: 'Certifications', icon: controlIcons.filePaper, parent: 2 },
            { id: 17, text: 'Course certificates', href: '#', parent: 16 },
            { id: 18, text: 'Free certifications', href: '#', parent: 16 },

            { id: 19, text: 'Resources', icon: controlIcons.arrowDown, parent: null },
            { id: 20, title: 'Web templates', icon: controlIcons.codeLine, parent: 19 },
            { id: 21, text: 'Free templates', href: '#', parent: 20 },
            { id: 22, text: 'Premium templates', href: '#', parent: 20 },
            { id: 23, title: 'Designs', icon: controlIcons.penNib, parent: 19 },
            { id: 24, text: 'Web designs', href: '#', parent: 23 },
            { id: 25, text: 'App designs', href: '#', parent: 23 },
            { id: 26, text: 'Component design', href: '#', parent: 23 },
            { id: 27, title: 'Others', icon: controlIcons.apps2Line, parent: 19 },
            { id: 28, text: 'Recent blogs', href: '#', parent: 27 },
            { id: 29, text: 'Tutorial videos', href: '#', parent: 27 },
            { id: 30, text: 'Webinar', href: '#', parent: 27 },

            { id: 31, text: 'Pricing', href: '#', parent: null },

            { id: 32, text: 'Company', icon: controlIcons.arrowDown, parent: null },
            { id: 33, title: 'About us', icon: controlIcons.communityLine, parent: 32 },
            { id: 34, text: 'About us', href: '#', parent: 33 },
            { id: 35, text: 'Support', href: '#', parent: 33 },
            { id: 36, text: 'Contact us', href: '#', parent: 33 },
            { id: 37, title: 'Safety and quality', icon: controlIcons.shieldLine, parent: 32 },
            { id: 38, text: 'Cookie settings', href: '#', parent: 37 },
            { id: 39, text: 'Privacy Policy', href: '#', parent: 37 },
        ],
    }
};

const user = {
    poinst: 100,
};

