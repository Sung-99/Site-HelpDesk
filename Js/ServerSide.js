var express = require('express');
var bodyParser = require('body-parser');
var app     = express();

const path = require('path');

app.use(bodyParser.json());

//Note that in version 4 of express, express.bodyParser() was
//deprecated in favor of a separate 'body-parser' module.
app.use(bodyParser.urlencoded({ extended: true })); 

//app.use(express.bodyParser());

app.get('/', function(req, res) {

  const htmlFilePath = path.join(__dirname, '..', 'index.html');
   res.sendFile(htmlFilePath) 
}); 

app.listen(3000, function() {
  console.log('Server running at http://127.0.0.1:3000/');
})
