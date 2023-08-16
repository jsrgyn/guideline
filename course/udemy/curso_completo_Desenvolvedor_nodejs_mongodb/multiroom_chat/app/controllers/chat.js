module.exports.iniciaChat = function(application, req, res) {

  var dadosForm = req.body;

  console.log(dadosForm);

  req.assert('apelido', 'Name ou apelido é obrigatório').notEmpty();
  req.assert('apelido', 'Nome ou apelido deve conter entre 3 e 15 caracteres').len(3, 15);

  var erros = req.validationErrors();

  if(erros) {
    // res.send('Existem erros no formulário');
    res.render('index', {validacao: erros})
    return;
  }


  res.render('chat')
}