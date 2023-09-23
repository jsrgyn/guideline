/* var express = require('express');
var bodyParser = require('body-parser');
var mongodb = require('mongodb'); */

var express = require('express'),
    bodyParser = require('body-parser'),
    mongodb = require('mongodb');

var app = express();

//body-parser
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var port = 8080;

app.listen(port);

var db = new mongodb.Db(
  'instagram',
  new mongo.Server('localhost', 27017, {}), {}
);

console.log('Servidor HTTP esta escutando na porta ' + port);

app.get('/', function(req, res){
  res.send({msg: 'Olá'});
})

// URI + verbo HTTP
app.post('/api', function(req, res){

  var dados = req.body;

  res.send(dados);

})