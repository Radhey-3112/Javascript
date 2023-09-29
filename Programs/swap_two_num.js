const prompt = require('prompt-sync')();

let a = Number.parseInt(prompt("Enter first number : "));
let b = Number.parseInt(prompt("Enter second number : "));

a = a+b;
b = a-b;
a = a-b;

console.log("a is",a);
console.log("b is",b);