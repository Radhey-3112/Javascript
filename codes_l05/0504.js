// The closure

function outerFunc() {
    let outerVar = 'I am outside!';
  
    function innerFunc() {
      console.log(outerVar); // => logs "I am outside!"
    }
  
    innerFunc();
}
  
outerFunc();

// Inside the innerFunc() scope, the variable outerVar is accessed from the lexical scope. 

// Note that innerFunc() invocation happens inside its lexical scope (the scope of outerFunc()).

// Let’s make a change: innerFunc() to be invoked outside of its lexical scope 
// (outside of outerFunc()). Would innerFunc() still be able to access outerVar?

function outerFuncA() {
    let outerVar = 'I am outside!';
  
    function innerFuncA() {
      console.log(outerVar); // => logs "I am outside!"
    }
  
    return innerFuncA;
  }
  
const myInnerFunc = outerFuncA();
myInnerFunc();

// Now innerFunc() is executed outside of its lexical scope. And what’s important:
// innerFunc() still has access to outerVar from its lexical scope, 
// even being executed outside of its lexical scope.
// In other words, innerFunc() closes over (a.k.a. captures, remembers) the variable outerVar 
// from its lexical scope.
// In other words, innerFunc() is a closure because it closes over the variable outerVar 
// from its lexical scope.

// The closure is a function that accesses its lexical scope even executed outside of its lexical scope.

// The closure is a function that remembers the variables from the place where it is defined, 
// regardless of where it is executed later.

// A rule of thumb to identify a closure: 
// if inside a function you see an alien variable (not defined inside that function), 
// most likely that function is a closure because the alien variable is captured.

// In the previous code snippet, 
// outerVar is an alien variable inside the closure innerFunc() captured from outerFunc() scope.