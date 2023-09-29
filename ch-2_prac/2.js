// switch cases 

const prompt = require('prompt-sync')();

let age = Number.parseInt(prompt("Enter Your Age: "));

switch(parseInt(age/10)){
    case 10 : 
    case 9 :
    case 8 :
    case 7 :
    case 6 :
    case 5 :
    case 4 :
    case 3 :
    case 2 :
        console.log('Adult');
        break;
    case 1 :
        console.log('Teenager');
        break;
    case 0 :
        console.log('Kid');
}
