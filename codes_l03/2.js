let decimal = Number(prompt("Enter a  Decimal Number"));

function binary(decimal){
    let arr1 = [] , arr2 = [];
    let i = 0;
    while(decimal){
        arr1[i] = decimal % 2;
        decimal = decimal >> 1;
        i++;
    }
    for(let j = arr1.length-1,i=0; j >= 0; j--,i++){
        arr2[i] = arr1[j]; 
    }
    return arr2;
}
let arr = binary(decimal);
console.log (arr);  