const input = `9
10 20 30 40 50 60 70 80 90`

// 점수 배열
const score = input.split('\n')[1].split(' ');

// 최댓값
const max = Number(score.sort((a,b)=>b-a)[0]);

// 최대값 기준으로 평균 구하기
const average = score.map(x => Number(x) / max * 100).reduce((a,b)=>a+b)/score.length;
console.log(average);
