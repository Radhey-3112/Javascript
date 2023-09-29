// let a, b;

// ({ a, b } = { a: 1, b: 2 });

// console.log(a,b);

// const { c, d } = {  a:1,b:2 };
// console.log(c,d); // undefined undefined  because you have to take both side same name of variables \

// const { p: foo, q: bar } = {p:42, q:true};
// console.log(foo, bar);
// console.log(p, q); // error because we renamed the name of p and q by foo and bar respectively

// const { y = 10, z  } = { y: 3 }; // here {y:3} is an object and we take values from it so both side name must be same
// console.log(y); // 3
// console.log(z); // undefined because we have not giv any default value

// function outerFuncA() {
//     let outerVar = 'I am outside!';

//     function innerFuncA() {
//         console.log(outerVar); // => logs "I am outside!"
//     }

//     return innerFuncA;
// }

// const myInnerFunc = outerFuncA();
// myInnerFunc();

// const message = 'Hello, World!';

// setTimeout(function callback() {
//     console.log(message); // logs "Hello, World!"
// }, 1000);

// Functional programming
// Currying happens when a function returns another function until the arguments are fully supplied.
// function multiply(a) {
//     return function executeMultiply(b) {
//         return a * b;
//     }
// }

// const double = multiply(2);
// double(3); // => 6
// double(5); // => 10

// const triple = multiply(3);
// triple(4); // => 12


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
