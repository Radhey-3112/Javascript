// Write a JS program demonstrating to loop through an object.

// for in loop

const student = { 
    name: 'John',
    age: 20,
    hobbies: ['reading', 'games', 'coding'],
};

const person = {
    gender: 'male'
}

// inheriting property
student.__proto__ = person;

for (let key in student) { 
    let value;

    // get the value
    value = student[key];

    console.log(key + " - " +  value);
} 

// for of loop

const student = { 
    name: 'John',
    age: 20,
    hobbies: ['reading', 'games', 'coding'],
};

// using Object.entries
// using for...of loop
for (let [key, value] of Object.entries(student)) {
    console.log(key + " - " +  value);
}