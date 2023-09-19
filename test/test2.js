const tmp = {
  1: { id: '1', text: 'a', completed: false },
  2: { id: '2', text: 'b', completed: true },
  3: { id: '3', text: 'c', completed: false },
};

const values = Object.values(tmp);
console.log(values);

const rev = values.reverse();
console.log(rev);

const result = rev.map(task => task.text);
console.log(result);

const result2 = Object.values(tmp)
  .reverse()
  .map(task => task.text);
console.log(result2);

console.log(Date.now());
