// write a js program that access the first,second,or nth item of the array,and if the item does not exist, get a default value using array destructing

let arr = [1,2,3,4,5,6,7,8,9,0];


function foo(a){
    let temp;
    if(arr[a] === undefined){
        return (temp = [arr[0],arr[1],2]);
    }
    return (temp = [arr[0],arr[1],arr[a]]);   
}

let temp = foo(11);

console.log(temp);