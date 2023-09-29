let n = Number(prompt("Enter a natural number"));

function Sum(n){
    if(n === 0){
        return  0;
    }
    else{
        return n + Sum(n - 1);
    }
}

console.log(Sum(n));