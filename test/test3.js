const key = Symbol();
console.log(key);
const emp = { [key]: { id: key } };
console.log(emp);
