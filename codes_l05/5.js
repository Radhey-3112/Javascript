// write a js program that create an object from given object containing all properties except first two

let obj1 = {
    name : "Radhey",
    age : 19,
    department : "C.E",
    salary : 90000,
    company : "Apple"
};

let obj2 = {}; // don't do let obj2 only. {} are important for creating an object  

// const keys = Object.keys(obj1);
// if(keys.length > 2){
//     for(let i = 2; i<keys.length; i++){
//         const key = keys[i];
//         obj2[key] = obj1[key];
//     }
// }

let i = 0;
for(key in obj1){
    if(i > 1){
        obj2[key] = obj1[key];
    }
    i++;
}

console.log(obj2);



