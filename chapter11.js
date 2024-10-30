// 함수선언 (함수를 새롭게 만드는 행위)
// -> 함수가 호출되었을 때 어떤 코드들을 실행할 것인지 미리 준비해두는 작업

function greeting() {
  console.log("안녕하세요!");
}

// 함수를 호출할 때는 소괄호를 무조건 작성해야함
console.log("호출 전");
greeting();
console.log("호출 후");

// 선언문을 호출문 위에 작성해도됨
// 호이스팅
// -> 끌어올리다 라는 뜻
function getArea(width, height) {
  function another() {
    // 중첩 함수
    console.log("another");
  }
  another();
  // 매개변수 선언
  let area = width * height;

  return area; // 반환값(함수 호출의 결과값)
  console.log(area1); // 실질적으로는 수행되지 않음
}

let area1 = getArea(10, 20); // 인수 설정
console.log(area1);

let area2 = getArea(30, 20);
console.log(area2);

getArea(120, 200);
