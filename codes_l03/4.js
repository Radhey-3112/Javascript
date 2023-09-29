let a = 5;
let b;

function fun(x, y = x) {
    return x + y;
}

console.log(fun(a, b));