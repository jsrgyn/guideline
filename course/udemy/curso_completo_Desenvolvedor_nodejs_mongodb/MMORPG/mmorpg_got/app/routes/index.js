module.exports = function(application){
	application.get('/', function(req, res){
		// res.send('Bem vindo a sua app NodeJS!');
		// res.render('index');
		application.app.controllers.index.index(application, req, res);
	});
}