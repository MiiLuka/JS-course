let m = -11;
let n = 91;
let number = Math.round(Math.random() * Math.abs(n - m - 2) + Math.min(n, m));
let random = number + (number % 2) + 1;
console.log(random);
