// Create Objects: Constructor Function Vs Object Literal

// Object Literal is generally used to create a single object. 
// The constructor function is useful if you want to create multiple objects. For example,

// using object literal
let person = {
    name: 'Sam'
}

// using constructor function
function Person () {
    this.name = 'Sam'
}

let person1 = new Person();
let person2 = new Person();

// Each object created from the constructor function is unique. 
// You can have the same properties as the constructor function or add a new property to one particular object. For example,

// using constructor function
function PersonA () {
    this.name = 'Sam'
}

let person3 = new PersonA();
let person4 = new PersonA();

// adding new property to person3
person3.age = 20;

// Now this age property is unique to person3 object and is not available to person4 object.

// However, if an object is created with an object literal, 
// and if a variable is defined with that object value, any changes in variable value will change the original object. 

// using object lateral
let personA = {
    name: 'Sam'
}

console.log(personA.name); // Sam

let student = personA;

// changes the property of an object
student.name = 'John';
student.age = 23;

// changes the origins object property
console.log(personA.name); // John
console.log(personA.age); // 23

// When an object is created with an object literal, 
// any object variable derived from that object will act as a clone of the original object. 
// Hence, any change you make in one object will also reflect in the other object.

// You can add properties or methods in an object like this:
// constructor function
function PersonB () {
    this.name = 'John',
    this.age = 23
}

// creating objects
let person5 = new PersonB();
let person6 = new PersonB();

// adding property to person5 object
person5.gender = 'male';

// adding method to person5 object
person5.greet = function () {
    console.log('hello');
}

person5.greet();   // hello

// Error code
// person6 doesn't have greet() method
// person6.greet();