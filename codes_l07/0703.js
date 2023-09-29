// The stopPropagation() method immediately stops the flow of an event through the DOM tree. However, it does not stop the browers default behavior.

let btn = document.querySelector('#btn');

btn.addEventListener('click', function(event) {
    console.log('The button was clicked!');
    event.stopPropagation();
});

document.body.addEventListener('click',function(event) {
    console.log('The body was clicked!');
});

// Without the stopPropagation() method, you would see two messages on the Console window.

// However, the click event never reaches the body because the stopPropagation() was called on the click event handler of the button.