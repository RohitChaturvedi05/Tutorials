var express = require('express');
var app = express();
var port = 8888;

app.use(express.static('public'));

app.get('/index.html', function (req, res) {
    res.sendFile(__dirname + "/" + "index1.html");
})

app.get('/form_get', function (req, res) {
    // Prepare output in JSON format
    response = {
        first_name: req.query.first_name,
        last_name: req.query.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
})


app.listen(port);

console.log("App listening at http://localhost:%s", port)