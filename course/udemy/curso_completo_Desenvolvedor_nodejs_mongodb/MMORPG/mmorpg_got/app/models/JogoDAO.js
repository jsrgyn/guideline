function JogoDAO(connection){
  this._connection = connection;
} 

JogoDAO.prototype.geraParametros = async function(usuario){
    await this._connection.connect();

    const collection = await this._connection.getDatabase().collection('jogo');

  var dados_jogo = {
    usuario: usuario,
    moeda: 15,
    suditos: 10,
    temor: Math.floor(Math.random() * 1000),
    sabedoria: Math.floor(Math.random() * 1000),
    comercio: Math.floor(Math.random() * 1000),
    magia: Math.floor(Math.random() * 1000)
  }
    

    try {
    
      await collection.insertOne(dados_jogo);
      console.log('Dados do Jogo inserido com sucesso');
    } catch (error) {
      console.error('Erro ao inserir dados do Jogo:', error);
    }

    await this._connection.closeConnection();
}

JogoDAO.prototype.iniciaJogo = async function(usuario){
  // console.log('Iniciar os parâmetros do jogo');

  await this._connection.connect();

  const collection = await this._connection.getDatabase().collection('jogo');

  try {
    const result = await collection.find(usuarios).toArray();
    console.log('Resultado da consulta:', result);

    if(result[0] !=  undefined) {
      req.session.autorizado = true;
      req.session.usuario = result[0].usuario;
      req.session.casa = result[0].casa;
    }

  } catch (error) {
    console.error('Erro ao pesquisar usuário:', error);
  }

  if(req.session.autorizado) {
    // res.send('usuário foi encontrado no banco de dados');
    res.redirect("jogo");
  } else {
    // res.send('usuário não existe no banco de dados');
    res.render('index', {validacao: {}});
  }
  await this._connection.closeConnection();

}

module.exports = function(){
  return JogoDAO;
} 