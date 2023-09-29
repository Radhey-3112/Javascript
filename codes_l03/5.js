let a = 31;

function fun(){
    return a*a;
}

function check(fun){
    if(typeof fun === 'function'){
        console.log(true);
    }
    else{
        console.log(false);
    }
}

check(fun);