const http = require('http');
const fs = require('fs');

const users = {};

http.createServer((req, res) => {
  if (req.method === 'GET') {
    if (req.url === '/') {
      fs.readFile('resFront.html', (err, data) => {
        if(err) throw err;
        res.end(data);
      });
    } else if (req.url === '/about') {
      fs.readFile('about.html', (err, data) => {
        if(err) throw err;
        res.end(data);
      });
    } else if (req.url === '/users') {
      res.end(JSON.stringify(users));
    }
  } else if (req.method === 'POST') {
    if (req.url === '/users') {
      console.log('POST body:', body);
      let body = '';
      req.on('data', data => {
        body += data;
      });

      req.on('end', _ => {
        console.log('POST body:', body);
        const {name} = JSON.parse(body);
        const id = Date.now();
        users[id] = name;
        res.writeHead(201);
        res.end('등록 성공');
      });
    }
  } else if (req.method === 'PUT') {

  } else if (req.method === 'DELETE') {

  } else {
    res.writeHead(404, 'NOT FOUND!');
    res.end('NOT FOUND!');
  }
}).listen(8080, _ => console.log('8080 포트 대기 중'));