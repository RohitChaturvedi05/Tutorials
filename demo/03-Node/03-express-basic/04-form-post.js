

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = 8888;
// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.static('public'));
app.get('/index.html', function (req, res) {    
    res.sendFile(__dirname + "/" + "index2.html");
})

app.post('/form_post', urlencodedParser, function (req, res) {
    // Prepare output in JSON format
    response = {
        first_name: req.body.first_name,
        last_name: req.body.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
})

var server = app.listen(port);

console.log("App listening at http://localhost:%s", port)