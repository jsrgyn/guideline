module.exports.jogo = function(application, req, res) {
  // res.render('jogo');
  if(req.session.autorizado){
    res.render('jogo');
  } else {
    res.send('Usuário precisa fazer login');
  }
}

module.exports.sair = function(application, req, res) {
  res.send('sair');
}