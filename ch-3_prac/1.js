// print marks with the help of object and for loop

let marks = {
    stu1 : 99,
    stu2 : 94,
    stu3 : 93,
    stu4 : 92,
    stu5 : 91,
}

for(let i =0; i<Object.keys(marks).length; i++){
    console.log("The marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]]);
}

// same program with for in key 

/*
for(let a in marks){
    console.log("The marks of " + a + " is " + marks[a]);
} */