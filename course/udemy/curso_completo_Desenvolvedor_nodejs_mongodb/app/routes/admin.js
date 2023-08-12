module.exports = function(application) {

  application.get('/formulario_inclusao_noticia', function(req, res) {
    res.render("admin/form_add_noticia");
  })

  application.post('/noticias/salvar', function(req, res) {
    var noticia = req.body;
    // res.send('Chegou na página');
    // res.send(noticias);

    req.assert('titulo', 'Título é obrigatório').notEmpty();
    req.assert('resumo', 'Resumo é obrigatório').notEmpty();
    req.assert('resumo', 'Resumo deve conter entre 10 e 100 caracteres obrigatório').len(10,100);
    req.assert('autor', 'Autor é obrigatório').notEmpty();
    req.assert('data_noticia', 'Data é obrigatório').notEmpty().isDate({format: 'YYYY-MM-DD'});
    req.assert('resumo', 'Noticia é obrigatório').notEmpty();

    var erros = req.validationErrors();

    if (erros) {
      res.render("admin/form_add_noticia");
      return;
    }


    var connection = application.config.dbConnection();

    // var noticiasModel = application.app.models.noticiasModel;

    /* var noticiasModel = new 
    application.app.models.noticiasModel; */

    var noticiasModel = new 
    application.app.models.NoticiasDAO(connection);

    /* noticiasModel.salvarNoticia(noticia, connection, function(error, result){
      // res.render("noticias/noticias", {noticias: result});
      res.redirect('/noticias');

  }) */

  noticiasModel.salvarNoticia(noticia, function(error, result){
    res.redirect('/noticias');

})
  })
}