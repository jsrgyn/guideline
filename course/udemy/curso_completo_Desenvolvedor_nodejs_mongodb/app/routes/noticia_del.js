// module.exports = function(app) {

//   app.get('/noticia', function(req, res) {

//     console.log('Processando aqui >>>>');
//     var connection = app.config.dbConnection();

//     // var noticiasModel = app.app.models.noticiasModel;

//     var noticiasModel = new app.app.models.NoticiasDAO(connection);

//     /* connection.query('select * from noticias where id_noticias = 2', function(error, result){
//       res.render("noticias/noticia", {noticia: result});
//     }) */

//     // noticiasModel.getNoticia(connection, function(error, result){
//     //   res.render("noticias/noticia", {noticia: result});

//     noticiasModel.getNoticia( function(error, result){
//       res.render("noticias/noticia", {noticia: result});
//   })
// })
// }
