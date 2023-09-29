// Write a JS program to merge property of two objects.

let person = {
    name : "Radha",
    age : 16,
    gender : "Female"
};

let employee = {
    id : "22CEUBG042",
    department : "Computer-Engineering",
    salary : 1000000
};

employee.__proto__ = person;

for(let arr in employee){
    console.log(arr);
}



