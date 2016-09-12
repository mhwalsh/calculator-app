var express = require('express');
var bodyPaser = require('body-parser');
var path = require('path');

var app = express();

//middleware to serve static files
app.use(express.static('public'));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../public/views/index.html'));
});

var server = app.listen(3000, function() {
  // way to grab the port off the server object returned
  var port = server.address().port;
  console.log('Listening on port', port);
});
