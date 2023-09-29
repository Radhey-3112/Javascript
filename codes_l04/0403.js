// JavaScript Constructor Function

// In JavaScript, a constructor function is used to create objects. For example,

// constructor function
function Person () {
    this.name = 'John',
    this.age = 23
}

// create an object
const person = new Person();

// In the above example, function Person() is an object constructor function.
// To create an object from a constructor function, we use the new keyword.
// Note: It is considered a good practice to capitalize the first letter of your constructor function.

// In JavaScript, you can create multiple objects from a constructor function. For example,

// constructor function
function PersonA () {
    this.name = 'John',
    this.age = 23,

     this.greet = function () {
        console.log('hello');
        
    }
}

// create objects
const person1 = new PersonA();
const person2 = new PersonA();

// access properties
console.log(person1.age);  // John
console.log(person2.greet());  // John

// In JavaScript, when this keyword is used in a constructor function, 
// this refers to the object when the object is created. For example,

// constructor function
/*function PersonB () {
    this.name = 'John'
}

// create object
const person3 = new PersonB();

// access properties
console.log(person1.name);  // John


// You can also create a constructor function with parameters. For example,
// constructor function
function PersonC (person_name, person_age, person_gender) {

    // assigning  parameter values to the calling object
     this.name = person_name,
     this.age = person_age,
     this.gender = person_gender,
 
     this.greet = function () {
         return ('Hi' + ' ' + this.name);
     }
 }
 
 
 // creating objects
 const person4 = new PersonC('John', 23, 'male');
 const person5 = new PersonC('Sam', 25, 'female');
 
 // accessing properties
 console.log(person4.name); // "John"
 console.log(person5.name); // "Sam"

//  That’s the main purpose of constructors – to implement reusable object creation code.*/