let num = [1,2,3,4,5,6];

 let b = num.toString(); // it will make string of the array
// console.log(b,typeof b);

 let c = num.join(' and '); // it will join 'and' between two  the elements and give new string
// console.log(c,typeof c);

 let a = num.pop();
// console.log(a,num); // that will poping out last element from array and changing original array and return popped element

 let d = num.push(70);
// console.log(d,num); // that will push one element at last and return new size of array

 let r = num.shift();
// console.log(r,num); // that will poping out first element from array and changing original array and  return popped element 

 let e = num.unshift(8);
// console.log(e,num); // that will push element at first and changing original array and return new size of array

let num1 = [11,12,13,14,15,16];
// delete num1[0]; // it will delete first element and put there one empty element and not change the size
// console.log(num1,num1.length);

 let new_arr = num.concat(num1); // here you can take many array for concatination and not chage the original arrays
// console.log(new_arr)

let num2 = [10,22,43,11,23,34,3];
// num2.sort(); // it will sort array alphabatically means fist it will sort elements strats from 0,then 1, so on... and chages the original array
// console.log(num2);

let compare = (a,b) =>{
     return a-b;
}
num2.sort(compare);
// console.log(num2)

let num3 = [11,22,33,44,55,66];
let f = num3.splice(2,3,101,102,103,104); 
// here 2 is the index from you want to delete elements. 3 is how many elements should be deleted. and after then no of elements will be added there if it is more then deleted then also it will add. and return array of deleted elements  
// console.log(f,num3);

let num4 = [11,22,33,44,55,66];
let g = num4.slice(3,5)
// here 3 is the starting index from you want to delete the elements and 5 is the last + 1 index so fifth indexed element will not deleted and return the array of deleted elements
// console.log(g,num4);

let nname = "Radhe";
let new_name = Array.from(nname);
// console.log(new_name); // here it make array from string and return it

let num5 = [101,102,103,104,105,106];
// num5.forEach((Element) =>{
//     console.log(Element+1);
// })

// let h = num5.map((value,index,array)=>{
//     console.log(value,index,array);
//     return value/2;
// })
// console.log(h); // here difference between forEach and map is that map returns an array and forEach dosn't return anything

let i = num5.filter((a)=>{
    return a > 103;
})
// console.log(i); it will return an filtered array 
// you can also write below
function foo(a){
    return a > 103;
}
i = num5.filter(foo);

let j = num5.reduce((a,b)=>{
    return a+b;
})
console.log(j,num5);

// it will take first two elements then add it and return then that added value will add with next element and so on.....
