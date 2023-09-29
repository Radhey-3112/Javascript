// Write a JS program to split array into smaller chunks.

let arr = [0,1,2,3,4,5,6,7,8,9];

function split(index){
    return arr.splice(index,2);
}

while(arr.length != 0){
    let temp = split(0);
    console.log(temp);
}


