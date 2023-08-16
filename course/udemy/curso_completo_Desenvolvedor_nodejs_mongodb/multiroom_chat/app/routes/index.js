module.exports = function(application){
  application.get('/', function(req, res){
    // res.send('Teste')
    // res.render('index.ejs')
    application.app.controllers.index.home(application, req, res);

  });
}