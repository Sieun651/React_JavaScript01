// 1. 콜백함수
function main(value) {
  console.log(1);
  console.log(2);
  value();
  console.log("end");
}

main(function () {
  console.log("i am sub");
});

main(() => {
  //   console.log("i am sub");
});

// 2. 콜백함수의 활용
// 중복코드 사용 예시
function repeat(count) {
  for (let idx = 1; idx <= count; idx++) {
    console.log(idx);
  }
}

function repeatDouble(count) {
  for (let idx = 1; idx <= count; idx++) {
    console.log(idx * 2);
  }
}

function repeatTriple(count) {
  for (let idx = 1; idx <= count; idx++) {
    console.log(idx * 3);
  }
}

// repeat(5);
// repeatDouble(5);
// repeatTriple(5);

// 중복코드를 콜백함수로 활용

function repeat(count, callback) {
  for (let idx = 1; idx <= count; idx++) {
    callback(idx);
  }
}

repeat(5, function (idx) {
  console.log(idx);
});

repeat(5, function (idx) {
  console.log(idx * 2);
});

repeat(5, function (idx) {
  console.log(idx * 3);
});

/* 더 간결하게 화살표를 사용하여 표현
repeat(5, (idx) => {
  console.log(idx);
});

repeat(5, (idx) => {
  console.log(idx * 2);
});

repeat(5, (idx) => {
  console.log(idx * 3);
});
*/
