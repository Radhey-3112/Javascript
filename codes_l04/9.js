// Write a js program to check whether the key is present or not

const prompt = require('prompt-sync')();

let obj = {
    name : "Ram",
    age : 24,
    description : "The king of Ayodhya"
};

let key = prompt("Enter your key ");

let is_key_present = false;

for(arr in obj){
    if(arr === key){
        is_key_present = true;
        break;
    }
    else{
        continue;
    }
}

if(is_key_present){
    console.log("Key is present");
}
else{
    console.log("Key is not present");
}