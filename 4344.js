const input = `5
5 50 50 70 80 100
7 100 95 90 80 70 60 50
3 70 90 80
3 70 90 81
9 100 99 98 97 96 95 94 93 91`

const arr = input.split('\n').map(a => a.split(' '));

for (let i = 1; i < arr.length; i++) {
  let numX = [];
  let num = Number(arr[i].shift()); // 학생 수
  let average = arr[i].map(x => Number(x)).reduce((a, b) => a + b) / num; // 평균점수
  
  // 평균보다 점수 높은 학생 수(numX 배열에 넣은 후 길이 구하기)
  for (let j = 0; j < arr[i].length; j++) {
    (Number(arr[i][j]) > average) ? numX.push(arr[i][j]): null;
  }
  let numXnum = numX.length;

  // 평균보다 점수 높은 학생 수의 비율
  let result = (numXnum / num * 100).toFixed(3);
  console.log(result);
}