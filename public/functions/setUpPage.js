/**
 * Sets up the page by updating the document title and adding a favicon.
 *
 * @param {Object} data - An object containing page setup information.
 * @param {string} data.title - The title to set for the document.
 * @param {string} data.icon - The URL of the favicon image to be added to the page.
 */

function setUpPage(data) {
    document.title = data.title;  // Set the page title from data.title

    // Create and append a <link> element to the document head to set the favicon
    createElement('link', {
        rel: 'icon',
        type: 'image/png',
        href: data.icon,
    }, document.head);
}