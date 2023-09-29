const prompt = require('prompt-sync')();

let a = Number.parseInt(prompt("Enter the celsius temperature : "))

console.log("Converted temperature in Fahrenheit is",(9/5)*a+32);