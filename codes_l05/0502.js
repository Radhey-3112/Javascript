// Object destructuring

// Basic assignment
const userA = {
    id: 42,
    is_verified: true
};

const {id, is_verified} = userA;

console.log(id); // 42
console.log(is_verified); // true

// A variable can be assigned its value with destructuring separate from its declaration.
let a, b;

({a, b} = {a: 1, b: 2});
// const {c, d} = {a: 1, b: 2};
// The parentheses ( ... ) around the assignment statement are required 
// when using object literal destructuring assignment without a declaration.


// A property can be unpacked from an object and 
// assigned to a variable with a different name than the object property.
const o = {p: 42, q: true};
const {p: foo, q: bar} = o;

console.log(foo); // 42
console.log(bar); // true

// A variable can be assigned a default, in the case that the value unpacked from the object is undefined
const {y = 10, z = 5} = {y: 3};

console.log(y); // 3
console.log(z); // 5

// A property can be both
// Unpacked from an object and assigned to a variable with a different name.
// Assigned a default value in case the unpacked value is undefined.
const {a: aa = 10, b: bb = 5} = {a: 3};

console.log(aa); // 3
console.log(bb); // 5

// Unpacking fields from objects passed as a function parameter
const user = {
    id: 42,
    displayName: 'jdoe',
    fullName: {
      firstName: 'John',
      lastName: 'Doe'
    }
  };
  
  function userId({id}) {
    return id;
  }
  
  function whois({displayName, fullName: {firstName: name}}) {
    return `${displayName} is ${name}`;
  }
  
  console.log(userId(user)); // 42
  console.log(whois(user));  // "jdoe is John"

  