var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// modules
var calculate = require('./modules/calculator');

var app = express();

//middleware to serve static files
app.use(express.static('public'));

//middleware to parse requst body - json
app.use(bodyParser.json());

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../public/views/index.html'));
});

app.post('/', function(req, res) {
  //commas in console logs become important
  console.log('in post and req.body = ', req.body);

  var answer = calculate(req.body);
  console.log('answer=', answer);

  //build up a return object
  var returnObject = {
    answer: answer
  };

  res.send(returnObject);
});

var server = app.listen(3000, function() {
  // way to grab the port off the server object returned
  var port = server.address().port;
  console.log('Listening on port', port);
});
