module.exports = function(application){
  application.post('/chat', function(req, res){
    // res.render('chat')
    application.app.controllers.chat.iniciaChat(application, req, res);

  });

  application.get('/chat', function(req, res){
    // res.render('chat')
    application.app.controllers.chat.iniciaChat(application, req, res);

  });
}