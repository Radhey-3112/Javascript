// let btn = document.querySelector('#btn');

// function display() {
//     alert('It was clicked!');
// }

// btn.addEventListener('click',display);

// First, select the button with the id btn by using the querySelector() method.
// Then, define a function called display() as an event handler.
// Finally, register an event handler using the addEventListener() so that when users click the button, the display() function will be executed.

let btn = document.querySelector('#btn');

// btn.addEventListener('click',function() {
//     alert('It was clicked!');

// });

btn.addEventListener('click',function(event) {
    alert('It was clicked!');
    console.log(event.target);
    console.log(event.currentTarget);
    console.log(event.type);
});