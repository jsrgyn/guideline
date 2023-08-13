// var dbConnection = require('../../config/dbConnection');

// module.exports = function(app) {
  module.exports = function(application) {

  // var connection = dbConnection();

  // app.get('/noticias', function(req, res) {
    // var mysql = require('mysql');
    /* var mysql = require('mysql2');
  
    var connection = mysql.createConnection({
      host : 'localhost',
      user: 'root',
      password: 'hcode123',
      database: 'portal_noticias'
    }); */
  
    // connection.query('select * from noticias', function(error, result){
      /* if (error)
        console.log(error);
 */
      // res.send(result);
      // res.render("noticias/noticias", {noticias: result});
    // })
    // res.render("noticias/noticias");
  // })



  application.get('/noticias', function(req, res) {

  //   var connection = application.config.dbConnection();

  //   // var noticiasModel = application.app.models.noticiasModel;

  //   // var noticiasModel = new application.app.models.noticiasModel;

  //   var noticiasModel = new application.app.models.NoticiasDAO(connection);

  //   /* connection.query('select * from noticias', function(error, result){
  //     res.render("noticias/noticias", {noticias: result});
  //   }) */

  //   // noticiasModel.getNoticias(connection, function(error, result){
  //   //   res.render("noticias/noticias", {noticias: result});

  //   noticiasModel.getNoticias( function(error, result){
  //     res.render("noticias/noticias", {noticias: result});
  // });
  application.app.controllers.noticias.noticias(application, req, res);
});

application.get('/noticia', function(req, res) {

//   var connection = application.config.dbConnection();

//   var noticiasModel = new application.app.models.NoticiasDAO(connection);

//   noticiasModel.getNoticia( function(error, result){
//     res.render("noticias/noticia", {noticia: result});
// })
  application.app.controllers.noticias.noticia(application, req, res);
});

};
