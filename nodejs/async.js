const fs = require('fs');
console.log('start');
fs.readFile('readme.txt', (err, data) => {
  console.log('1: ', data.toString());
});

fs.readFile('readme.txt', (err, data) => {
  console.log('2: ', data.toString());
});

fs.readFile('readme.txt', (err, data) => {
  console.log('3: ', data.toString());
});
console.log('end');