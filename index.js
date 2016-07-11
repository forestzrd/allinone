var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('Hello Node App!\n');
  console.log('Time: ', Date.now());
});

app.listen(80, function() {
  console.log('Listening: ', Date.now());
});
