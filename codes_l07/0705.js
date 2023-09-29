// DOM Level 2 Event Handlers provide two main methods for dealing with the registering/deregistering event listeners:

// addEventListener() – register an event handler
// removeEventListener() – remove an event handler
// These methods are available in all DOM nodes.

// The addEventListener() method accepts three arguments: an event name, an event handler function, and a Boolean value that instructs the method to call the event handler during the capture phase (true) or during the bubble phase (false).

let btn = document.querySelector('#btn');
btn.addEventListener('click',function(event) {
    alert(event.type); // click
});

// It is possible to add multiple event handlers to handle a single event, like this:
btn.addEventListener('click',function(event) {
    alert('Clicked!');
});

// The removeEventListener() removes an event listener that was added via the addEventListener(). However, you need to pass the same arguments as were passed to the addEventListener(). For example:
let btnA = document.querySelector('#button');

// add the event listener
let showAlert = function() {
    alert('Clicked!');
};
btnA.addEventListener('click', showAlert);

// remove the event listener
btnA.removeEventListener('click', showAlert);