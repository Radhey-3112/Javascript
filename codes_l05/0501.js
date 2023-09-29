// Destructuring assignment
// The destructuring assignment syntax is a JavaScript expression that 
// makes it possible to unpack values from arrays, 
// or properties from objects, into distinct variables.

// Array destructuring

// Basic variable assignment
const foo = ['one', 'two', 'three'];

const [red, yellow, green] = foo;
console.log(red); // "one"
console.log(yellow); // "two"
console.log(green); // "three"

// Assignment separate from declaration
// A variable can be assigned its value via destructuring, 
// separate from the variable's declaration.
let a, b;

[a, b] = [1, 2];
console.log(a); // 1
console.log(b); // 2

// In an array destructuring from an array of length N specified on the right-hand side of the assignment, 
// if the number of variables specified on the left-hand side of the assignment is greater than N, 
// only the first N variables are assigned values. 
// The values of the remaining variables will be undefined

const fooA = ['one', 'two'];

const [redA, yellowA, greenA, blueA] = fooA;
console.log(redA); // "one"
console.log(yellowA); // "two"
console.log(greenA); // undefined
console.log(blueA);  //undefined

// A variable can be assigned a default, 
// in the case that the value unpacked from the array is undefined.
let c, d;

[c=5, d=7] = [1];
console.log(c); // 1
console.log(d); // 7

// Two variables values can be swapped in one destructuring expression.
const arr = [1,2,3];
[arr[2], arr[1]] = [arr[1], arr[2]];
console.log(arr); // [1,3,2]

// Parsing an array returned from a function
function f() {
    return [1, 2];
  }
  
let e, g;
[e, g] = f();
console.log(e); // 1
console.log(g); // 2

// You can ignore return values that you're not interested in:
function fA() {
    return [1, 2, 3];
  }
  
const [h, , i] = fA();
console.log(h); // 1
console.log(i); // 3

const [j] = fA();
console.log(j); // 1

// Assigning the rest of an array to a variable
const [k, ...l] = [1, 2, 3];
console.log(k); // 1
console.log(l); // [2, 3]