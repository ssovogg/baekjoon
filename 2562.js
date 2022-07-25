const input = `3
29
38
12
57
74
40
85
61`

const array = input.split('\n');

// 내림차순 정렬
const maxArr = input.split('\n');
maxArr.sort((a,b)=>{return b-a});
let max = maxArr[0];
let maxIndex = array.indexOf(max) + 1;
console.log(max, maxIndex);