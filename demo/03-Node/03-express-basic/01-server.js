

var express = require('express');
var app = express();

var port = process.env.port || 8888;

//process.env.NODE_ENV //

app.get('/', function (req, res) {
    res.send('Hello World');
})

var server = app.listen(port)


console.log("App listening at http://localhost:%s", port)