var http = require('http');
var socketio = require('socket.io');
var fs = require('fs');

var port = 8888;


var handler = function (req, res) {
  fs.readFile(__dirname + '/socket.html', function (err, data) {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading index.html');
    } else {
      res.writeHead(200);
      res.end(data);
    }
  });
};

var app = http.createServer(handler);
var io = socketio.listen(app);

io.sockets.on('connection', function (socket) {

  setInterval(function () {
    var timestamp = Date.now();
    console.log('Emitted: ' + timestamp);
    socket.emit('timer', timestamp);
  }, 2000);


  socket.on('submit', function (data) {
    console.log('---------------------------');
    console.log('Submitted: ' + data);
    console.log('---------------------------');
  });


});

app.listen(port);

console.log('\nServer running! at http://localhost:%s', port);