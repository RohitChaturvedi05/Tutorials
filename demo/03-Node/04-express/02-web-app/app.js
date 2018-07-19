var express = require('express');
var app = express();
var port = process.env.port || 9999;


app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/index.html");
})
app.get('/index', function (req, res) {
    res.sendFile(__dirname + "/index.html");
})

app.get('/contact', function (req, res) {
    res.sendFile(__dirname + "/contact.html");
})


//Note- For Passing the data into template
//use Data prop
app.get('/details/', function (req, res) {
    var data = { name: 'rohit', age: 28 }
    res.render('details', { data: data });
})

app.listen(port);

console.log("App listening at http://localhost:%s", port)