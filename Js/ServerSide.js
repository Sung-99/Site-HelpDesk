var express = require('express');
var bodyParser = require('body-parser');
var app     = express();

//Note that in version 4 of express, express.bodyParser() was
//deprecated in favor of a separate 'body-parser' module.
app.use(bodyParser.urlencoded({ extended: true })); 

//app.use(express.bodyParser());

app.post('/myaction', function(req, res) {

  var lName = req.body.Nome;
  var messg = req.body.Questio;


  res.send('You sent the name "' + lName + ' and the message ' + messg + '".');
}); 

app.listen(3000, function() {
  console.log('Server running at http://127.0.0.1:3000/');
})
