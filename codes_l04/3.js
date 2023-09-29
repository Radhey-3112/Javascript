// Write a JS program to append an object to an array.

let obj = {
    name : "Ram",
    age : 28
};

let arr = [1,2,3,4,5];

let new_arr = arr.concat(obj);

console.log(new_arr);