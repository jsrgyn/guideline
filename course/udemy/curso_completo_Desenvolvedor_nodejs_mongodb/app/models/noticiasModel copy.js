// // function Noticias(connection) {
//   function NoticiasDAO(connection) {

//   this._connection = connection;

// }
// /* 
// Noticias.prototype.getNoticias = function(connection, callback) {
//   connection.query('select * from noticias', callback);
// }

// Noticias.prototype.getNoticia = function(connection, callback) {
//   connection.query('select * from noticias where id_noticias = 2', callback)

// }

// Noticias.prototype.salvarNoticia = function(noticia, connection, callback) {
//   connection.query('insert into noticias set ? ', noticia, callback)
// }
//  */


// Noticias.prototype.getNoticias = function(callback) {
//   this._connection.query('select * from noticias', callback);
// }

// Noticias.prototype.getNoticia = function(callback) {
//   this._connection.query('select * from noticias where id_noticias = 2', callback)

// }

// Noticias.prototype.salvarNoticia = function(noticia, callback) {
//   this._connection.query('insert into noticias set ? ', noticia, callback)
// }



// /* 
// module.exports = function(){

//   this.getNoticias = function(connection, callback){
//     connection.query('select * from noticias', callback);
//   };


//   this.getNoticia = function(connection, callback) {
//     connection.query('select * from noticias where id_noticias = 2', callback)
//   }

//   this.salvarNoticia = function(noticia, connection, callback){
//     connection.query('insert into noticias set ? ', noticia, callback)
//   }

//   return this;

// } */


// module.exports = function() {
//   return Noticias;
// }