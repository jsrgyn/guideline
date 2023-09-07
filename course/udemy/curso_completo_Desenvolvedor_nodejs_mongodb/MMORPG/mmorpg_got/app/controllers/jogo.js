module.exports.jogo = async function(application, req, res) {
  // res.render('jogo');
 /*  if(req.session.autorizado){
    res.render('jogo', {img_casa: req.session.casa});
  } else {
    res.send('Usuário precisa fazer login');
  } */


  if(req.session.autorizado !== true) {
    res.send('Usuário precisa fazer login');
    return;
  }

  /* var comando_invalido = 'N';
  if(req.query.comando_invalido == 'S'){
    comando_invalido = 'S';
  }

  console.log(comando_invalido); */

  var msg = '';
  if(req.query.msg != ''){
    msg = req.query.msg;
  }

  var usuario = req.session.usuario;
  var casa = req.session.casa;
   
  const connection = application.config.dbConnection;
  const JogoDAO = new application.app.models.JogoDAO(connection);

  // await JogoDAO.iniciaJogo(res, usuario, casa, comando_invalido);
  await JogoDAO.iniciaJogo(res, usuario, casa, msg);


  // res.render('jogo', {img_casa: req.session.casa});
}

module.exports.sair = function(application, req, res) {
  // res.send('sair');
  req.session.destroy(function(err){
    res.render("index", {validacao: {}})
  })
}

module.exports.suditos = function(application, req, res) {
  if(req.session.autorizado !== true) {
    res.send('Usuário precisa fazer login');
    return;
  }
    res.render("aldeoes", {validacao: {}})
}

module.exports.pergaminhos = function(application, req, res) {
  if(req.session.autorizado !== true) {
    res.send('Usuário precisa fazer login');
    return;
  }
  res.render("pergaminhos", {validacao: {}})
}

module.exports.ordenar_acao_sudito = async function(application, req, res) {

  if(req.session.autorizado !== true) {
    res.send('Usuário precisa fazer login');
    return;
  }
  var dadosForm = req.body;

  req.assert('acao', 'Ação deve ser informado').notEmpty();
  req.assert('quantidade', 'Quantidade deve ser informada').notEmpty();

  var erros = req.validationErrors();

  if(erros){
    // res.redirect('jogo?comando_invalido=S');
    res.redirect('jogo?msg=A');
    return;
   }

   const connection = application.config.dbConnection;
  const JogoDAO = new application.app.models.JogoDAO(connection);

  dadosForm.usuario = req.session.usuario;
  
  await JogoDAO.acao(dadosForm);
  //  console.log(dadosForm);
  // res.send('tudo ok!');

  res.redirect('jogo?msg=B');
}