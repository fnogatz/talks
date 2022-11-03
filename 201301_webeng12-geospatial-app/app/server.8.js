var express = require('express');

var app = express();
var server = require('http').createServer(app);

app.use(express.static(__dirname + '/static'));

app.post('/checkin-simple.html', function(req, res) {
  // do some magic here!

  res.redirect('checkin-simple.html');
});

server.listen(3000, function() {
  console.log('Listening on port 3000');
});