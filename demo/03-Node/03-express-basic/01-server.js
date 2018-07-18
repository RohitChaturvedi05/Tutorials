

var express = require('express');
var app = express();

var port = 8888;

app.get('/', function (req, res) {
    res.send('Hello World');
})

var server = app.listen(port)


console.log("App listening at http://localhost:%s", port)