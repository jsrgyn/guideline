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

JogoDAO.prototype.iniciaJogo = async function(res, usuario, casa){
  // console.log('Iniciar os parâmetros do jogo');

  await this._connection.connect();

  const collection = await this._connection.getDatabase().collection('jogo');

  try {
    const result = await collection.find({usuario: usuario}).toArray();
    await this._connection.closeConnection();
    console.log('Resultado da consulta:', result);
    // return result;

    res.render('jogo', {img_casa: casa, jogo: result[0]});

  } catch (error) {
    console.error('Erro ao pesquisar usuário:', error);
  }
}

module.exports = function(){
  return JogoDAO;
} 