const util = require('util');
const fs = require('fs');

// const square = util.deprecate(x => console.log(x*x), '이거 쓰지마세요!');
// square(5);


// fs.readFile('path.js', (err, data) => {
//   if (err) throw err;
//   console.log(data.toString());
// });

const myReadFile = util.promisify(fs.readFile);
myReadFile('path.js').then(data => console.log(data.toString()));
