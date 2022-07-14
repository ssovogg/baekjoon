
const input = `1 1
2 3
3 4
9 8
5 2
0 0`

let  = "";
let array = input.split('\n');
for(let i = 0; i < array.length; i++){
  let a = Number(array[i].split(' ')[0]);
  let b = Number(array[i].split(' ')[1]);
  if(a !== 0 || b !== 0){
    answer = a+b;
  } else {
    break;
  }
  console.log(answer);
}