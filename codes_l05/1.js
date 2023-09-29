// write a js program that an integer array input and return the sorted array by odd then even. Order is not not important.

let size = Number(prompt("Enter the size of array"));
let arr = [];
let i = 0;

console.log(size);


while(size--){
    arr[i] = Number(prompt("enter element in array"));
    i++;
}

console.log(arr);

let odd = [], even = [];

for(let i = 0,j = 0,k = 0; i<arr.length; i++){
    if(arr[i] % 2 == 0){
        even[j++] = arr[i];
    }
    else{
        odd[k++] = arr[i];
    }
}
arr = [...odd,...even];

console.log(arr);