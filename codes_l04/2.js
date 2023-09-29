// Write a JS program to check user specified value exist or not in the array.If exist then replace with a new user specified value.

let arr = [0,1,2,3,4,5,6,7,8,9];

let num = Number(prompt("Enter a value"));

let arr_ind = arr.indexOf(num);

if(arr_ind == -1){
    alert("Value is not present in the arr");
}
else{
    let new_val = Number(prompt("Enter a new value"));
    arr[arr_ind] = new_val;
}

console.log(arr);