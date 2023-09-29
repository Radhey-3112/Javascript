// Write a JS program to create objects in different ways.


// Simple function
function vehicle(name,maker,engine){
    this.name = name;
    this.maker = maker;
    this.engine = engine;
}
// New keyword to create an object
let car  = new vehicle('GT','BMW','1998cc');


// Creating js objects with object literal
let car = {
    name : 'GT',
    maker : 'BMW',
    engine : '1998cc'
};

// Creating object with Object.create() method:

const coder = {
    isStudying : false,
    printIntroduction : function(){
        console.log(`My name is ${this.name}. Am I studying?: ${this.isStudying}`);
    }
};
const me = Object.create(coder);

// using new keyword

class Vehicle {
    constructor(name, maker, engine) {
      this.name = name;
      this.maker =  maker;
      this.engine = engine;
    }
  }
    
  let car1 = new Vehicle('GT', 'BMW', '1998cc');