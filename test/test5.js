{
  const task = { id: '1', text: '등산', completed: false };
  const text = '독서';

  // const merge = { ...task, text: '독서' };
  const merge = { ...task, text };
  console.log(merge);
}

{
  // 프로퍼티 동적 추가
  const obj = {};
  obj.name = '홍길동';
  obj.age = 30;
  console.log(obj);

  delete obj.age; //속성 삭제
  console.log(obj);
}
{
  const name = '홍길동';
  const age = 30;
  const obj = { name, age };
  console.log(obj);
}
