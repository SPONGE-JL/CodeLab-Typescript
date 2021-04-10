type num = number;

// orgAdd(a, b)
const orgAdd = (a: num, b: num): num => a + b;
const orgRes = orgAdd(1, 1);
console.log(orgRes);

// add(a)(b);
// const standby = add(a);
// const reulst = standby(b);

const add = (a: num) => (b: num) => a + b;
const addResult = add(1)(1);
console.log(addResult);

const what = add(1);
console.log(typeof what);

const whatResult = what(1);
console.log(typeof whatResult);
console.log(whatResult);

//
const hof = (fn: (a: number) => number) => fn(10);
const hofResult = hof(add(1));
console.log(hofResult);
// hofResult: 11
