const prompt = require('prompt-sync')();

let fibo = (n) => {
  if (n == 1) {
    return 1;
  }
  if (n == 0) {
    return 0;
  }

  return fibo(n-1) + fibo(n-2);
}

let arr = [];

for(let i=0; i<=7; i++){
  arr[i] = fibo(i);
}

console.log(arr);