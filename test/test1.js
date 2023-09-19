const person = {
  name: '홍길동',
  age: 30,
  blood: 'A',
};

//객체 리터럴의 프로퍼티 키를 배열로 반환
const keys = Object.keys(person);
console.log(keys);

//객체 리터럴의 프로퍼티 값를 배열로 반환
const values = Object.values(person);
console.log(values);

//객체 리터럴의 프로퍼티를 요소로 갖는 배열로 반환
const entries = Object.entries(person);
console.log(entries);
