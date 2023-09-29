const prompt = require('prompt-sync')();

/* 1. Create an array of numbers and take input from user to add that numbers in the array.

let arr = [1,2,3,4,5,6];
let add = Number(prompt("Enter a number"));
arr.unshift(add);
console.log(arr);

*/

/* 2. Keep adding the numbers to the q1 till the 0 is not added to the array.

let arr = [1,2,3,4,5,6];
let add = Number(prompt("Enter a number"));
arr.unshift(add);
while(add != 0){
    add = Number(prompt("Enter a number"));
    arr.unshift(add);
}

console.log(arr);
*/

/* 3. Filter for number divisable by 10 from an given array.

let foo = (a)=>{
    if(a % 10 === 0){
        return a;
    }
    return;
}

let arr = [10,20,33,45,50];
arr = arr.filter(foo);
console.log("New array is ", arr);
*/

/* 4. Create an array of squre of given numbers.

let arr = [1,2,3,4,5,6];
let new_arr = arr.map((val)=>{
    return val * val;
})
console.log(new_arr);
*/

/* 5. Use reduce to calculate the factorial of given number from an array of first n natural numbers (n being the nuber whose factorial needs to be calculated)

let arr = [1,2,3,4,5];
let factorial = (a,b) =>{
    return a*b;
}
arr = arr.reduce(factorial);
console.log(arr);
*/