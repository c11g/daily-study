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
      let body = '';
      console.log('POST body:', body);
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
    if (req.url.startsWith('/users/')) {
      const key = req.url.split('/')[2];
      let body = '';
      req.on('data', data => {
        body += data;
      });
      req.on('end', _ => {
        console.log('PUT body:', body);
        users[key] = JSON.parse(body).name;
        res.end(JSON.stringify(users));
      });
    }
  } else if (req.method === 'DELETE') {
    if (req.url.startsWith('/users/')) {
      const key = req.url.split('/')[2];
      delete users[key];
      res.end(JSON.stringify(users));
    }
  } else {
    res.writeHead(404, 'NOT FOUND!');
    res.end('NOT FOUND!');
  }
}).listen(8080, _ => console.log('8080 포트 대기 중'));