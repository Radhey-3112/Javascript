// The JavaScript Array class is a global object that is used in the construction of arrays; which are high-level, list-like objects.
// Neither the length of a JavaScript array nor the types of its elements are fixed. 

// Create an Array

let fruits = ['Apple', 'Banana'];

console.log(fruits.length);

// Access an Array item using the index position

let first = fruits[0];
//Apple

let last = fruits[fruits.length - 1];
//Banana

// Loop over an Array

fruits.forEach(function(item, index, array) {
    console.log(item, index);
  })

  // Apple 0
  // Banana 1

// Add an item to the end of an Array

let newLength = fruits.push('Orange');
["Apple", "Banana", "Orange"]

// Remove an item from the end of an Array

let lastAgain = fruits.pop(); // remove Orange (from the end)
["Apple", "Banana"]

// Remove an item from the beginning of an Array

let firstAgain = fruits.shift(); // remove Apple from the front
// ["Banana"]

// Add an item to the beginning of an Array

let newLengthAgain = fruits.unshift('Strawberry'); // add to the front
// ["Strawberry", "Banana"]

// Find the index of an item in the Array

fruits.push('Mango');
// ["Strawberry", "Banana", "Mango"]

let posAgain = fruits.indexOf('Banana');
// console.log(posAgain); 
// 1

// Remove an item by index position

let removedItem = fruits.splice(0); // this is how to remove an item
//console.log(fruits);
// ["Strawberry", "Mango"]

// Remove items from an index position

// let vegetables = ['Cabbage', 'Turnip', 'Radish', 'Carrot'];
// console.log(vegetables);
// ["Cabbage", "Turnip", "Radish", "Carrot"]

// let pos = 1;
// let n = 2;

// let removedItems = vegetables.splice(pos, n);
// // this is how to remove items, n defines the number of items to be removed,
// // starting at the index position specified by pos and progressing toward the end of array.

// console.log(vegetables);
// // ["Cabbage", "Carrot"] (the original array is changed)

// console.log(removedItems);
// ["Turnip", "Radish"]

//let years = [1950, 1960, 1970, 1980, 1990, 2000, 2010];
// console.log(years.0)   // a syntax error
//console.log(years[0]);  // works properly

// A JavaScript array's length property and numerical properties are connected.
const myFruits = []
myFruits.push('banana', 'apple', 'peach');

console.log(myFruits.length); // 3

myFruits[5] = 'mango';
console.log(myFruits[5]);            // 'mango'
console.log(Object.keys(myFruits));  // ['0', '1', '2', '5']
console.log(myFruits.length);        // 6

// Increasing the length
myFruits.length = 10;
console.log(myFruits);              // ['banana', 'apple', 'peach', empty x 2, 'mango', empty x 4]
console.log(Object.keys(myFruits)); // ['0', '1', '2', '5']
console.log(myFruits.length);       // 10
console.log(myFruits[8]);           // undefined

// Decreasing the length property does, however, delete elements.
myFruits.length = 2;
console.log(Object.keys(myFruits)); // ['0', '1']
console.log(myFruits.length);       // 2
console.log(myFruits); 