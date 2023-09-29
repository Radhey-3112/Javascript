//Write a JS program to remove a user specified value from an array.

let arr = [1,2,3,4,5,6,7,8,9];

let num = Number(prompt("Enter a number"));

let arr_ind = arr.indexOf(num);

arr.splice(arr_ind,1);

console.log(arr);