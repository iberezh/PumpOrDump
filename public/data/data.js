const path = "";
let currentLanguage = 'en';

const webData = {
    title: "PumpOrDump",
    icon: path + "/assets/img/ico.png",
    navbar: {
        navbarTitle: {
            text: 'PumpOrDump', 
            href: '#',
            icon:  `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>`,
        },
        controls: {
            openNavbar: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>`,
            closeNavbar: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>`,
        },
        elements: [

        ],
    }
};

const user = {
    poinst: 100,
};
