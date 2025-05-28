//IIFE to biuld main page
(function biuldMainPage(data) {
    setUpPage(data);
    // console.time('navbar');
    createNavbar(data.navbar);
    // console.timeEnd('navbar');
    
}) (webData);