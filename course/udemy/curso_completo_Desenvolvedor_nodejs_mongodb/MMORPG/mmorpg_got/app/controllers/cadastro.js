module.exports.cadastro = function(application, req, res) {
  res.render('cadastro', {validacao: {}, dadosForm: {}});
}

module.exports.cadastrar = async function(application, req, res) {
  // res.send('teste - vamos cadastrar');

  var dadosForm = req.body;

  console.log(dadosForm);

  req.assert('nome', 'Nome não pode ser vazio').notEmpty();
  req.assert('usuario', 'Usuário não pode ser vazio').notEmpty();
  req.assert('senha', 'Senha não pode ser vazio').notEmpty();
  req.assert('casa', 'Casa não pode ser vazio').notEmpty();

  var erros = req.validationErrors();

  if(erros){
    // res.send('existem erros no formulário');
    res.render('cadastro', {validacao: erros, dadosForm: dadosForm});
    return;
  }

  /* var connection = application.config.dbConnection;
  console.log(connection);

  var UsuarioDAO = new application.app.models.UsuariosDAO(conne);

  UsuarioDAO.inserirUsuario(dadosForm); */

  const { nome, email, senha } = req.body;

  const connection = application.config.dbConnection;

  console.log('Cadastro:', connection)


  const usuariosDAO = new application.app.models.UsuariosDAO(connection);

  const novoUsuario = { nome, email, senha };
  usuariosDAO.inserirUsuario(novoUsuario);

  res.status(201).json({ mensagem: 'Usuário cadastrado com sucesso' });

  // res.send('podemos cadastrar')
}