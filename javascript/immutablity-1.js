// immutablity
// Object.assign, spread(es6)
const o1 = { name: 'c11g' };
// const o2 = Object.assign({}, o1);
const o2 = {...o1};
o2.name = 'park';
console.log(o1, o2, o1 === o2);

