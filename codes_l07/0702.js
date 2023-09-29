// To prevent the default behavior of an event, you use the preventDefault() method.

// For example, when you click a link, the browser navigates you to the URL specified in the href attribute:
// However, you can prevent this behavior by using the preventDefault() method of the event object:

let link = document.querySelector('a');

link.addEventListener('click',function(event) {
    console.log('clicked');
    event.preventDefault();
});

// Note that the preventDefault() method does not stop the event from bubbling up the DOM. And an event can be canceled when its cancelable property is true.