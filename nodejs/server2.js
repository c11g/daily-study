const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
  fs.readFile('server1.html', (err, data) => {
    if (err) throw err;
    res.end(data);
  })
}).listen(8080, _ => console.log('8080 포트에서 대기 중'));