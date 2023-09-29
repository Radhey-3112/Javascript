//Write a JS program to perform intersection between two arrays using filter() method.

let arr1 = [1,2,3,4,5,6,7,8,9];
let arr2 = [0,2,6,8,10];

function intersection(elements){
    
    return arr2.includes(elements);
}

let filtered = arr1.filter(intersection);

console.log(filtered);


