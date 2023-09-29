// write a js program to swap to numbers without temporary variable

let a = 2;
let b = 3;

({a,b} = {a : b, b : a} );

console.log(a,b);