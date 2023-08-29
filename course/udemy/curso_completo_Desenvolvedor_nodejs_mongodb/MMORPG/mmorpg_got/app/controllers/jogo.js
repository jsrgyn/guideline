module.exports.jogo = function(application, req, res) {
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
  res.re
}

module.exports.sair = function(application, req, res) {
  // res.send('sair');
  req.session.destroy(function(err){
    res.render("index", {validacao: {}})
  })
}