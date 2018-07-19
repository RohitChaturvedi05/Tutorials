var compression = require('compression');
var express = require('express');
var jsonfile = require('jsonfile');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');

var empFile = './data/employe.data.json';

var port = process.env.PORT || 3000;
var __response = {
    status: "ok",
    error: {},
    errorcode: null
};

var app = express();
var router = express.Router();
// api/user
// api/userdetails

app.use(compression());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride());

app.use(function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Accept', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

    next();
});

app.use('/api/', router);
app.use(function (err, req, res, next) {
    if (app.get('env') === 'development') {
        __response.error = { message: err['message'], stack: err['stack'] ? JSON.stringify(err['stack']) : "" };
    } else {
        __response.error = { message: err['message'] };
    }

    __response.errorcode = err.status || 500;
    __response.status = "Something went wrong!"
    res.status(__response.errorcode);
    res.json(__response);
});

app.listen(port);
console.log('\t \t \t *** API STARTED on http://localhost:' + port + '/api/ ***');