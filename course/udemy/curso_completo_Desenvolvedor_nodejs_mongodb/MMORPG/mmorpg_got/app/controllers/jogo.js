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

  var usuario = req.session.usuario;
  var casa = req.session.casa;
   
  const connection = application.config.dbConnection;
  const JogoDAO = new application.app.models.JogoDAO(connection);

  await JogoDAO.iniciaJogo(res, usuario, casa);


  // res.render('jogo', {img_casa: req.session.casa});
}

module.exports.sair = function(application, req, res) {
  // res.send('sair');
  req.session.destroy(function(err){
    res.render("index", {validacao: {}})
  })
}

module.exports.suditos = function(application, req, res) {
    res.render("aldeoes", {validacao: {}})
}

module.exports.pergaminhos = function(application, req, res) {
  res.render("pergaminhos", {validacao: {}})
}