/* module.exports = function(app) {

app.get('/', function(req, res) {
  res.render("home/index");
})
} */

module.exports = function(application) {

  application.get('/', function(req, res) {
    application.app.controllers.home.index(application, req, res)
  })
  }