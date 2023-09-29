// Write a JavaScript program to display a number sequence from a given number (1 to 10) up to 100 with a jump of 3 using recursion.

const prompt = require('prompt-sync')();

let arr = [];

let i = 0;

let fun = (n) => {
  if (n <= 100) {
    arr[i++] = n;
    return fun(n+3);
  }
  
}

fun(80);
console.log(arr);