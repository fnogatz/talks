var express = require('express');
var io = require('socket.io');

var app = express();
var server = require('http').createServer(app);
io = io.listen(server);

app.use(express.static(__dirname + '/static'));
app.use(express.bodyParser());

app.post('/checkin-simple.7.html', function(req, res) {
  io.sockets.emit('checkin', req.body);

  res.redirect('checkin-simple.html');
});

io.sockets.on('connection', function(socket) {
  socket.on('coordinates', function(coords) {
    // TODO: find near by bus stops
    console.log(coords);
  });
});

server.listen(3000, function() {
  console.log('Listening on port 3000');
});