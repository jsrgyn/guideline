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

JogoDAO.prototype.iniciaJogo = async function(res, usuario, casa, msg){
  // console.log('Iniciar os parâmetros do jogo');

  await this._connection.connect();

  const collection = await this._connection.getDatabase().collection('jogo');

  try {
    const result = await collection.find({usuario: usuario}).toArray();
    await this._connection.closeConnection();
    console.log('Resultado da consulta:', result);
    // return result;

    // res.render('jogo', {img_casa: casa, jogo: result[0], comando_invalido: comando_invalido});

    res.render('jogo', {img_casa: casa, jogo: result[0], msg: msg});

  } catch (error) {
    console.error('Erro ao pesquisar usuário:', error);
  }
}

JogoDAO.prototype.acao = async function(acao){
  console.log(acao);

  await this._connection.connect();

    let collection = await this._connection.getDatabase().collection('acao');

    try {

      var date = new Date();

      var tempo = null;

      switch(parseInt(acao.acao)){
        case 1: tempo = 1 * 60 * 60000; break;
        case 2: tempo = 2 * 60 * 60000; break;
        case 3: tempo = 5 * 60 * 60000; break;
        case 4: tempo = 5 * 60 * 60000; break;
      }
      acao.acao_termina_em = date.getTime() + tempo;
    
      await collection.insertOne(acao);
      console.log('Ação do Jogo inserido com sucesso');
    } catch (error) {
      console.error('Erro ao inserir as ações do Jogo:', error);
    }

    collection = await this._connection.getDatabase().collection('jogo');

    var moedas = null;
    switch(parseInt(acao.acao)){
      case 1: moedas = -2 * acao.quantidade; break;
      case 2: moedas = -3 * acao.quantidade; break;
      case 3: moedas = -1 * acao.quantidade; break;
      case 4: moedas = -1 * acao.quantidade; break;
    }

    await collection.updateOne(
      {usuario: acao.usuario}, 
      {$inc: {moeda: moedas}});

    await this._connection.closeConnection();

  
}

JogoDAO.prototype.getAcoes = async function(usuario, res){
  // console.log('Recuperar ações');

   // console.log('Iniciar os parâmetros do jogo');

   await this._connection.connect();

   const collection = await this._connection.getDatabase().collection('acao');

   var date = new Date();
   var momento_atual = date.getTime();

 
   try {
     const result = await collection.find({usuario: usuario, acao_termina_em: {$gt:momento_atual}}).toArray();
     await this._connection.closeConnection();
     console.log('Resultado da consulta:', result);

     res.render("pergaminhos", {acoes: result})
 
   } catch (error) {
     console.error('Erro ao pesquisar usuário:', error);
   }
}

module.exports = function(){
  return JogoDAO;
} 