const http = require('http');

const parseCookie = (cookie = '') => (
  cookie
    .split(';')
    .map(v => v.split('='))
    .map(([k, ...vs]) => [k, vs.join('=')])
    .reduce((obj, [k, v]) => {
      obj[k.trim()] = decodeURIComponent(v);
      return obj;
    } ,{})
);

http.createServer((req, res) => {
  const cookies = parseCookie(req.headers.cookie);
  console.log(req.url, cookies);
  res.writeHead(200, {'Set-Cookie': ['my-cookie=test', 'age=36']});
  res.end('Hello Cookie');
}).listen(8080, _ => console.log('8080 포트 대기 중'));