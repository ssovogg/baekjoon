input = `10 5
1 10 4 9 2 3 8 5 7 6`

const n = input.split('\n')[0].split(' ')[0];
const x = Number(input.split('\n')[0].split(' ')[1]);
const arrayA = input.split('\n')[1].split(' ');
const result = [];

for(let i =0; i<arrayA.length; i++){
  (arrayA[i] < x) ? result.push(arrayA[i]) : null;
}

console.log(result.join(' '));