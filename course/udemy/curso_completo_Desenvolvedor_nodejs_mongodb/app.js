// var express = require('express');

// var app = express();

// var msg = require('./mod_teste');
// var msg = require('./mod_teste')();

// app.set('view engine', 'ejs');

/* app.get('/tecnologia', function(req, res){
  res.render("secao/tecnologia");
})

app.get('/', function(req, res){
  res.send("<html><body>Portal de Noticias</body></html>")
}) */

var app = require('./config/server')

// app.get('/', function(req, res) {
//   res.render("home/index");
// })

/* app.get('/formulario_inclusao_noticia', function(req, res) {
  res.render("admin/form_add_noticia");
}) */

/* app.get('/noticias', function(req, res) {
  res.render("noticias/noticias");
}) */

var rotaNoticias = require('./app/routes/noticias')(app);
// rotaNoticias(app);

var rotaHome = require('./app/routes/home')(app);
// rotaHome(app);

var rotaFormInclusaoNoticia = require('./app/routes/formulario_inclusao_noticia')(app);
// rotaFormInclusaoNoticia(app);


app.listen(3000, function(){
  // console.log('Servidor rodando com Express');
  // console.log(msg)
  // console.log(msg())
  console.log('Servidor ON');
})
