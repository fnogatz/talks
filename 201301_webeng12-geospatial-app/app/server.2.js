var express = require('express');

var app = express();
var server = require('http').createServer(app);

app.use(express.static(__dirname + '/static'));

// just an example route
app.get('/my/resource', function(req, res) {
  res.send('Hello World');
});

server.listen(3000, function() {
  console.log('Listening on port 3000');
});