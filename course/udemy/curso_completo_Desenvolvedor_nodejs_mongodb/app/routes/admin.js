module.exports = function(application) {

  application.get('/formulario_inclusao_noticia', function(req, res) {
    // res.render("admin/form_add_noticia", {validacao: undefined});
    // res.render("admin/form_add_noticia", {validacao: {}, noticia: {}});

    application.app.controllers.admin.formulario_inclusao_noticia(application, req, res);

  })

  application.post('/noticias/salvar', function(req, res) {
//     var noticia = req.body;
//     // res.send('Chegou na página');
//     // res.send(noticias);

//     console.log(noticia);

//     req.assert('titulo', 'Título é obrigatório').notEmpty();
//     req.assert('resumo', 'Resumo é obrigatório').notEmpty();
//     req.assert('resumo', 'Resumo deve conter entre 10 e 100 caracteres obrigatório').len(10,100);
//     req.assert('autor', 'Autor é obrigatório').notEmpty();
//     req.assert('data_noticia', 'Data é obrigatório').notEmpty().isDate({format: 'YYYY-MM-DD'});
//     req.assert('noticia', 'Noticia é obrigatório').notEmpty();

//     var erros = req.validationErrors();

//     console.log(erros);

//     if (erros) {
//       res.render("admin/form_add_noticia", {validacao: erros, noticia: noticia})
//       return;
//     }

//     var connection = application.config.dbConnection();

//     // var noticiasModel = application.app.models.noticiasModel;

//     /* var noticiasModel = new 
//     application.app.models.noticiasModel; */

//     var noticiasModel = new 
//     application.app.models.NoticiasDAO(connection);

//     /* noticiasModel.salvarNoticia(noticia, connection, function(error, result){
//       // res.render("noticias/noticias", {noticias: result});
//       res.redirect('/noticias');

//   }) */

//   noticiasModel.salvarNoticia(noticia, function(error, result){
//     res.redirect('/noticias');

// })

application.app.controllers.admin.noticias_salvar(application, req, res);
  })
}