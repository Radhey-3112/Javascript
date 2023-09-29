// Use logical opertator to check the age is between 10 to 20

const prompt = require('prompt-sync')();

let age = Number.parseInt(prompt("Enter Your Age: "));
if(age>=10 && age<=20){
    console.log('Age is correct');
}
else{
    console.log('Age is not correct');
}