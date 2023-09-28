/* var express = require('express');
var bodyParser = require('body-parser');
var mongodb = require('mongodb'); */

var express = require('express'),
    bodyParser = require('body-parser'),
    dbConect = require('./dbConnection.js');
    // mongodb = require('mongodb');

var app = express();

//body-parser
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var port = 8080;

app.listen(port);

/* var db = new mongodb.Db(
  'instagram',
  new mongo.Server('localhost', 27017, {}), {}
); */



var bd = dbConect;

console.log('Servidor HTTP esta escutando na porta ' + port);

app.get('/', function(req, res){
  res.send({msg: 'Olá'});
})

// URI + verbo HTTP
// POST (create)
app.post('/api', async function(req, res){

  var dados = req.body;

  await bd.connect();  
  
  const collection = await bd.getDatabase().collection('postagens');

  try {
    var dat = await collection.insertOne(dados);
    console.log(dat);

    // res.json(dat)
    res.json({'status': 'Inclusão realizada com sucesso'})
  } catch (error) {
    // res.json(error)
    res.json({'status': 'erro'})
  }
  await bd.closeConnection();
})

// GET (ready)
app.get('/api', async function(req, res){
  await bd.connect();  
  
  const collection = await bd.getDatabase().collection('postagens');

  try {
    const dados = await collection.find().toArray();
    
    console.log(dados);

    res.json(dados)
  } catch (error) {
    res.json(error)
  }
  await bd.closeConnection();
})