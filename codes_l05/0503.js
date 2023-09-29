// Closures

// The scope
// The accessibility of variables is managed by scope. 
// You are free to access the variable defined within its scope. 
// But outside of that scope, the variable is inaccessible.

// In JavaScript, a scope is created by a function or a code block.
function foo() {
    // The function scope
    let count = 0;
    console.log(count); // logs 0
  }
  
foo();
// console.log(count); // ReferenceError: count is not defined

// The scope is a space policy that rules the accessibility of variables.
// An immediate property arises — the scope isolates variables. 
// That’s great because different scopes can have variables with the same name.
// You can reuse common variables names (count, index, current, value, etc) in different scopes without collisions.
function foo() {
    // "foo" function scope
    let count = 0;
    console.log(count); // logs 0
  }
  
  function bar() {
    // "bar" function scope
    let count = 1;
    console.log(count); // logs 1
  }
  
foo();
bar();

// // Scopes nesting
// Scopes can be nested
// The variables of the outer scope are accessible inside the inner scope

function outerFunc() {
    // the outer scope
    let outerVar = 'I am outside!';
  
    function innerFunc() {
      // the inner scope
      console.log(outerVar); // => logs "I am outside!"
    }
  
    innerFunc();
  }
  
outerFunc();

// The lexical scope
// JavaScript implements a scoping mechanism named lexical scoping (or static scoping). 
// Lexical scoping means that the accessibility of variables is determined 
// by the position of the variables inside the nested scopes.

// Simpler, the lexical scoping means that inside the inner scope you can access 
// variables of outer scopes.

// It’s called lexical (or static) because the engine determines (at lexing time) 
// the nesting of scopes just by looking at the JavaScript source code, 
// without executing it.

const myGlobal = 0;

function func() {
  const myVar = 1;
  console.log(myGlobal); // logs "0"

  function innerOfFunc() {
    const myInnerVar = 2;
    console.log(myVar, myGlobal); // logs "1 0"

    function innerOfInnerOfFunc() {
      console.log(myInnerVar, myVar, myGlobal); // logs "2 1 0"
    }

    innerOfInnerOfFunc();
  }

  innerOfFunc();
}

func();

// The lexical scope of innerOfInnerOfFunc() consits of scopes of innerOfFunc(), func() 
// and global scope (the outermost scope). 
// Within innerOfInnerOfFunc() you can access the lexical scope variables myInnerVar, myVar 
// and myGlobal.

// The lexical scope of innerFunc() consists of func() and global scope. 
// Within innerOfFunc() you can access the lexical scope variables myVar and myGlobal.

// Finally, the lexical scope of func() consists of only the global scope. 
// Within func() you can access the lexical scope variable myGlobal.
