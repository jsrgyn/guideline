/* function UsuarioDAO(connection) {
  // this._x = '';

  console.log('objeto carregado');

  this._connection = connection(); 
}

UsuarioDAO.prototype.inserirUsuario = function(usuario) {
  console.log(usuario);

  console.log(this._connection);

  this._connection.collection('usuario', (err, collection) => {
    if (err) {
      console.error('Erro ao acessar a coleção:', err);
      return;
    }
    collection.insert(usuario);
  });
}

module.exports = function() {
  return UsuarioDAO;
} */

/* function UsuarioDAO(connection) {
  console.log('objeto carregado', connection);
  this._connection = connection(); // Apenas atribua a conexão diretamente, não a invoque como uma função
}

UsuarioDAO.prototype.inserirUsuario = function(usuario) {
  console.log(usuario);
  console.log(this._connection);

  this._connection.collection('usuario', (err, collection) => {
    if (err) {
      console.error('Erro ao acessar a coleção:', err);
      return;
    }
    collection.insert(usuario);
  });
}

module.exports = function() {
  return UsuarioDAO;
} */

/* class UsuariosDAO {
  constructor(connection) {
    this._connection = connection;
  }

  async inserirUsuario(usuario) {
    const collection = this._connection.getDatabase().collection('usuario');
    try {
      await collection.insertOne(usuario);
      console.log('Usuário inserido com sucesso');
    } catch (error) {
      console.error('Erro ao inserir usuário:', error);
    }
  }

  // Outros métodos para manipulação de usuários
}

module.exports = UsuariosDAO; */


// Em algum controlador (por exemplo, cadastroController.js)

function UsuarioDAO(connection) {

// class UsuariosDAO {
  // constructor(connection) {
    this._connection = connection;
  // }

}
  UsuarioDAO.prototype.inserirUsuario = async function(usuarios, req) { 
    // console.log('This.Connection:', this._connection);

    await this._connection.connect();

    const collection = await this._connection.getDatabase().collection('usuarios');


    // console.log('collection:', collection)

    try {
      // await collection.insertOne(usuario);
      await collection.insertOne(usuarios);
      console.log('Usuário inserido com sucesso');
    } catch (error) {
      console.error('Erro ao inserir usuário:', error);
    }

    await this._connection.closeConnection();
  }

  // Outros métodos para manipulação de usuários

  UsuarioDAO.prototype.autenticar = async function(usuarios, req, res) { 
    console.log(usuarios);

    await this._connection.connect();

    const collection = await this._connection.getDatabase().collection('usuarios');

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


// module.exports = UsuariosDAO;

module.exports = function() {
  return UsuarioDAO;
}
