var express = require('express');
var app = express();

var port = 8888;

//Default Get Route
app.get('/', function (req, res) {
    console.log("GET request received");
    res.send('Default Page');
})

//Default Route
app.post('/', function (req, res) {
    console.log("POST request received");
    res.send('Default Route POST');
})

// This responds a DELETE request for the /del_user page.
app.delete('/deluser', function (req, res) {
    console.log("GDELETE request for /DeleteUser");
    res.send('Delete User Page');
})

// This responds a GET request for the /list_user page.
app.get('/userlist', function (req, res) {
    console.log("GET request for /userlist");
    res.send('User Listing Page');
})


var server = app.listen(port)

console.log("App listening at http://localhost:%s", port)