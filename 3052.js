const input = `39
40
41
42
43
44
82
83
84
85`


// 배열의 각 요소를 42로 나누었을 때, 서로 다른 나머지가 몇 개 있는지 출력
const arr = new Set(input.split('\n').map(x => Number(x) % 42)).size;

console.log(arr);