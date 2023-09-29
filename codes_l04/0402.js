// JavaScript Object Literal

// A JavaScript object literal is a comma-separated list of name-value pairs wrapped in curly braces. 
// Object literals encapsulate data, enclosing it in a tidy package. 
// This minimizes the use of global variables which can cause problems when combining code.

// The following demonstrates an example object literal:

var myObject = {
    sProp: 'some string value',
    numProp: 2,
    bProp: false
};

// Object literal property values can be of any data type, including array literals, functions, and nested object literals. 
// Here is another object literal example with these property types.

var Swapper = {
    // an array literal
    images: ["smile.gif", "grim.gif", "frown.gif", "bomb.gif"],
    pos: { // nested object literal
        x: 40,
        y: 300
    },
    onSwap: function() { // function
        // code here
    }
};

console.log(Swapper.pos.x);

// Object Literal Syntax
// Object literals are defined using the following syntax rules:

// A colon separates property name from value.
// A comma separates each name-value pair from the next.
// A comma after the last name-value pair is optional.
// If any of the syntax rules are broken, such as a missing comma or colon or curly brace, 
// a JavaScript error will be triggered.

