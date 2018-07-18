var fs = require('fs');

var http = require('http');
var port = 8888;

http.createServer(function (req, res) {

  if (req.url === '/file.txt') {

    res.writeHead(200, { 'Content-Type': 'text/plain' });
    fs.createReadStream(__dirname + '/file.txt').pipe(res);

  } else if (req.url === '/index.html') {

    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.createReadStream(__dirname + '/index.html').pipe(res);

  } else {

    res.end("Hello world");

  }
}).listen(port);


console.log('\nServer running! at http://localhost:%s', port);