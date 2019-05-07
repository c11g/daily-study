// immutablity
// nested object
const o1 = { name: 'c11g', score: [1,2,3] };
const o2 = Object.assign({}, o1);
// array clone: slice / concat / ...spread
// o2.score = o2.score.slice();
// o2.score = o2.score.concat();
o2.score = [...o1.score];
o2.name = 'park';
o2.score.push(4);
console.log(o1, o2, o1 === o2, o1.score === o2.score);