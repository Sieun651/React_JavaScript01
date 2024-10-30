/*
for (초기식(counter 변수); 조건식(언제까지 반복할건지 설정); 증감식) {
  console.log("반복!"); // 조건식이 참일 때만 출력
}
*/

for (let idx = 0; idx <= 10; idx++) {
  if (idx % 2 === 0) {
    continue;
  }
  console.log(idx);
  if (idx >= 5) {
    break;
  }
}
