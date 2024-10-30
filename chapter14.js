// 스코프
// -> 전역(전체 영역) 스코프 / 지역(특정 영역) 스코프
// -> 전역 스코프 : 전체 영역에서 접근 가능
// -> 지역 스코프 : 특정 영역에서만 접근 가능

let a = 1; // 전역 스코프 (어디서든 접근 가능)

function funcA() {
  let b = 2; // 지역 스코프 (함수 외부에서 접근 불가능)
  console.log(a);
}

funcA();
// console.log(b); ---> 오류

if (true) {
  let c = 1;
}

for (let i = 0; i < 10; i++) {
  let d = 1;
}
