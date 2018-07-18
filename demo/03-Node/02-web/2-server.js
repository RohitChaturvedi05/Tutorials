

var http = require('http');
var port = 8888;

http.createServer(function (req, res) {

    res.end("Hello world");

}).listen(port);


console.log('\nServer running! at http://localhost:%s', port);