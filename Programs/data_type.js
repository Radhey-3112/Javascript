//These all are premitive datatypes of javascript

let a = null;                                           // null               
let b = 3112;                                          //  number
let c = true;                                         //   boolean
let d = BigInt(100000) + BigInt("2563");             //    bigint
let e = "RAdheKrishna";                             //     string
let f = Symbol("Pikachu!");                        //      symbol
let g = undefined;                                //       undefined  => let g <=> let g = undefined
console.log(a,b,c,d,e,f,g);
console.log(typeof d);

// Objects in javascript <=> Non premitive datatypes

const item = {
    "Radha" : true,
    "Krishna" : true,
    "Kans" : false,
    "Love" : 143,
    "Rom" : undefined,
}

console.log(item["Radha"],item["Krishna"],item["Kans"],item["Love"],item["Rom"],item["Rakesh"]);