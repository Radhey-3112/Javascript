// write a javascript program to generate a random number and store it in a variable. The program then takes an input from the user to tell them whether the guess was correct, greater or lesser than the original number. 100-(no of guesses) is the score of the user. The program is expected to terminate once the number is guessed. Number should between 1-100.

const prompt = require('prompt-sync')();
let original = Math.floor(Math.random() * (100-1+1));
let n;
let chances = 0;
while(1){
    n = Number(prompt("Enter your number"));
    if(original == n){
        chances++;
        console.log("Your rank is",100-chances, "actual number is ", original);
        break;
    }

    else if(n > original && n >= 0 && n <=100){
        console.log("Your number is bigger");
        chances++;
    }

    else if(n < original && n >= 0 && n <=100){
        console.log("Your number is smaller");
        chances++;
    }
}