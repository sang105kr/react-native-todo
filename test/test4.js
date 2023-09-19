console.log(Symbol.iterator in {});
console.log(Symbol.iterator in []);
console.log(Symbol.iterator in new Set());
console.log(Symbol.iterator in new Map());

//...+ (이터러블(배열, set, map, NodeList, HtmlCollection...) or 객체리터럴)
// 요소를 목록으로 변환하는 연산자.

const task = { x: 1, y: 2 };
const task2 = { y: 3 , z: 1 };

...task  // x: 1, y: 2
{...task} // {x: 1, y: 2}

{...task, ...task2} // {x: 1, y: 2 ,z: 1}
