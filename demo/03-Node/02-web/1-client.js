var http = require('http');

var options = {
    host: 'www.google.com',
    port: 80,
    path: '/',
    method: 'GET'
};

console.log("Going to make request...");

// Version 1:  http.request with string URL

var req = http.request('http://www.google.com/', function (response) {
    console.log(response.statusCode);
    response.pipe(process.stdout);
});

req.end();