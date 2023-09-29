// Spread syntax (...)
// javascript spread operator

// Spread operator allows an iterable to expand in places where 0+ arguments are expected. 
// It is mostly used in the variable array where there is more than 1 values are expected. 
// It allows us the privilege to obtain a list of parameters from an array. 


// normal array concat() method
let arr = [1,2,3];
let arr2 = [3,4,5];
  
arrA = arr.concat(arr2);
  
console.log(arrA); // [ 1, 2, 3, 4, 5 ]

//spread operator doing the concat job
arrB = [...arr,...arr2];
console.log(arrB);

// spread operator for copying 
let arr3 = ['a','b','c'];
let arrC = [...arr3];
console.log(arrC);