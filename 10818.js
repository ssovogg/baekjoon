let input = `5
20 10 35 30 7`;

let array = input.split('\n')[1].split(' ');
let result = [];
array.sort((a, b) => {
  return a - b
});
result.push(array[0]);
result.push(array[array.length - 1]);
console.log(result.join(' '));