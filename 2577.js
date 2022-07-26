const input = `150
266
427`

const arr = input.split('\n');
// 배열 요소를 모두 곱한 값 구하기
const multiArr = String(arr.reduce((a, b) => a * b)).split('');

// 0이 몇번 쓰였는지 출력
let zeroCount = 0;
for (let i = 0; i < multiArr.length; i++) {
  (multiArr[i] == 0) ? zeroCount++ : null;
}
console.log(zeroCount);

// 1부터 9까지의 숫자가 각각 몇번 쓰였는지 출력
for (let i = 0; i < 9; i++) {
  let count = 0;
  for (let j = 0; j < 9; j++) {
    (i + 1 == multiArr[j]) ? count++ : 0;
  }
  console.log(count);
}
