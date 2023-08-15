module.exports.noticias = function(application, req, res){
  var connection = application.config.dbConnection();
    var noticiasModel = new application.app.models.NoticiasDAO(connection);
    noticiasModel.getNoticias( function(error, result){
      res.render("noticias/noticias", {noticias: result});
  });
}

module.exports.noticia = function(application, req, res){
  var connection = application.config.dbConnection();

  var noticiasModel = new application.app.models.NoticiasDAO(connection);

  console.log(req.query);

  var id_noticias = req.query;

  noticiasModel.getNoticia(id_noticias, function(error, result){
    res.render("noticias/noticia", {noticia: result});
})

}