/* var express = require('express');
var bodyParser = require('body-parser');
var mongodb = require('mongodb'); */

var express = require('express'),
    bodyParser = require('body-parser'),
    multiparty = require('connect-multiparty'),
    dbConect = require('./dbConnection.js'),
    objectId = require('mongodb').ObjectId,
    fs = require('fs');
    // mongodb = require('mongodb');

var app = express();

//body-parser
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(multiparty());

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

  // res.setHeader("Access-Control-Allow-Origen", "http://localhost:80")

  res.setHeader("Access-Control-Allow-Origin", "*");

  var date = new Date();
  time_stamp = date.getTime();

  // var dados = req.body;

  // console.log('Dados:', dados);
  console.log(req.files);
  
  var url_imagem = time_stamp
  + '_' + req.files.arquivo.originalFilename;

  var path_origem = req.files.arquivo.path;
  // var path_destino = './uploads/' + req.files.arquivo.originalFilename;
  var path_destino = './uploads/' + url_imagem;
  

  fs.rename(path_origem, path_destino, function(err, ){
    if(err){
      res.status(500).json({error: err});
      return;
    }
  })

  var dados = {
    url_imagem : url_imagem,
    titulo : req.body.titulo
  }

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

  res.setHeader("Access-Control-Allow-Origin", "*");

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

app.get('/uploads/:imagem', function(req, res){
  var img = req.params.imagem;

  fs.readFile('./uploads/'+img, function(err, content){
    
  })
})

// GET by ID (ready)
app.get('/api/:id', async function(req, res){
  await bd.connect();  
  
  const collection = await bd.getDatabase().collection('postagens');

  console.log('Postagem', req.params.id, new objectId(req.params.id));

  try {
    const dados = await collection.find(new objectId(req.params.id)).toArray();
    
    console.log(dados);

    // res.json(dados)
    res.status(200).json(dados)
  } catch (error) {
    res.json(error)
  }
  await bd.closeConnection();
})

// PUT by ID (update)
app.put('/api/:id', async function(req, res){
  await bd.connect();  
  
  console.log('Body:', req.body, req.body.titulo, new objectId(req.params.id))

  const collection = await bd.getDatabase().collection('postagens');

  try {

    var dados = await collection.updateOne({_id : new objectId(req.params.id)}, {$set : {titulo : req.body.titulo}});
      res.json(dados);
  } catch (error) {
    res.json(error)
  }
  await bd.closeConnection();
})

// DELETE by ID (remover)
app.delete('/api/:id', async function(req, res){
  await bd.connect();  

  const collection = await bd.getDatabase().collection('postagens');

  try {

    var dados = await collection.deleteOne({_id : new objectId(req.params.id)});
      res.json(dados);
  } catch (error) {
    res.json(error)
  }
  await bd.closeConnection();
})