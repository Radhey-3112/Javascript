// Closure examples

// Event handler

let countClicked = 0;

myButton.addEventListener('click', function handleClick() {
  countClicked++;
  myText.innerText = `You clicked ${countClicked} times`;
});

// When the button is clicked, handleClick() is executed somewhere inside of the DOM code. 
// The execution happens far from the place of definition.

// But being a closure, handleClick() captures countClicked from the lexical scope and 
// updates it when a click happens. Even more, myText is captured too.

// Callbacks
// Capturing variables from the lexical scope is useful in callbacks.

// A setTimeout() callback:
const message = 'Hello, World!';

setTimeout(function callback() {
  console.log(message); // logs "Hello, World!"
}, 1000);

// The callback() is a closure because it captures the variable message.

// An iterator function for forEach():
let countEven = 0;
const items = [1, 5, 100, 10];

items.forEach(function iterator(number) {
  if (number % 2 === 0) {
    countEven++;
  }
});

console.log(countEven); // => 2
// The iterator is a closure because it captures countEven variable.

// Functional programming
// Currying happens when a function returns another function until the arguments are fully supplied.
function multiply(a) {
    return function executeMultiply(b) {
      return a * b;
    }
  }
  
  const double = multiply(2);
  double(3); // => 6
  double(5); // => 10
  
  const triple = multiply(3);
  triple(4); // => 12

// multiply is a curried function that returns another function.

// Currying, an important concept of functional programming, 
// is also possible thanks to closures.

// executeMultiply(b) is a closure that captures a from its lexical scope. 
// When the closure is invoked, 
// the captured variable a and the parameter b are used to calculate a * b.


// A closure is a function that captures variables from its lexical scope. 
// In simple words, the closure remembers the variables from the place where it is defined,
// no matter where it is executed.

// Closures allow event handlers, callbacks to capture variables. 
// They’re used in functional programming. 