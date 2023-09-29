// prompt() funcion is used as prompt
const prompt = require('prompt-sync')();
let age = prompt("Hey what's your age ?");
console.log(age);
console.log(typeof age); // string

age = Number.parseInt(age); // converting string into number
console.log(typeof age);  // Number

console.log("You can",age>=18? "drive" : "not drive") // ternary operator
