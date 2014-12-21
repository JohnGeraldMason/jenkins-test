var express = require('express');
 
var app = express();
 
app.get('/', function (req, res) {
  res.send('jenkins testing 1 2 3 5');
});
 
app.listen(process.env.PORT || 5000);
 
module.exports = app;