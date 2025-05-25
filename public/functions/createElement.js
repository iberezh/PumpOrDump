/**
 * Creates an HTML element, sets its attributes, and appends it to a parent element if provided.
 *
 * @param {string} tag - The tag name of the element to create (e.g., 'div', 'img', 'a').
 * @param {Object} attributes - An object containing attribute key-value pairs to set on the element.
 * @param {HTMLElement} [parent] - Optional. The parent element to which the created element will be appended.
 * @returns {HTMLElement} The created HTML element.
 */

function createElement(tag, attributes, parent) {
    var element = document.createElement(tag);
    for (var key in attributes) {
        element.setAttribute(key, attributes[key]);
    }
    if (parent) {
        parent.appendChild(element);
    }
    return element;
}
