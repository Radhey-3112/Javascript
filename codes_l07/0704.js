// An event can be handled by one or multiple event handlers. If an event has multiple event handlers, all the event handlers will be executed when the event is fired.

function showAlert() {
    alert('Clicked!');
}

// Disadvantages of using HTML event handler attributes
// Assigning event handlers using HTML event handler attributes are considered as bad practices and should be avoided as much as possible because of the following reasons:

// First, the event handler code is mixed with the HTML code, which will make the code more difficult to maintain and extend.

// Second, it is a timing issue. If the element is loaded fully before the JavaScript code, users can start interacting with the element on the webpage which will cause an error.

// For example, suppose that the following showAlert() function is defined in an external JavaScript file:
// And when the page is loaded fully and the JavaScript has not been loaded, the showAlert() function is undefined. If users click the button at this moment, an error will occur./


// DOM Level 0 event handlers
// Each element has event handler properties such as onclick. To assign an event handler, you set the property to a function as shown in the example:
let btn = document.querySelector('#btn');

btn.onclick = function() {
    alert(this.id);
};
// In this case, the anonymous function becomes the method of the button element. Therefore, the this value is equivalent to the element. And you can access the element’s properties inside the event handler:
// By using the this value inside the event handler, you can access the element’s properties and methods.
// To remove the event handler, you set the value of the event handler property to null:

btn.onclick = null;