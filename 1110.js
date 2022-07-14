const input = `26`;

let x = input; 
let sum;
let count = 0;

do {
  count++;
  sum = Math.floor(x/10) + x % 10; 
  x = (x % 10)*10 + (sum % 10); 
} while (input != x);

console.log(count);
