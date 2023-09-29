// The following example uses the querySelector() selects the first element in the document:
let element = document.querySelector('*');
console.log(element);

// And this example finds all elements in the document:
let elements = document.querySelectorAll('*');
console.log(elements);

// The following example finds the first h1 element in the document:
let firstHeading = document.querySelector('h1');
console.log(firstHeading);

// And the following example finds all h2 elements:
let heading2 = document.querySelectorAll('h2');
console.log(heading2);

// The following example finds the first element with the menu-item class:
let note = document.querySelector('.menu-item');
console.log(note);
// And the following example finds all elements with the menu class:
let notes = document.querySelectorAll('.menu-item');
console.log(notes);

// The following example finds the first element with the id #logo:
let logo = document.querySelector('#logo');
console.log(logo);
// Since the id should be unique in the document, the querySelectorAll() is not relevant.

