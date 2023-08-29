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

module.exports = function(){
  return JogoDAO;
}