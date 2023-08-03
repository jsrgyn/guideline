const express = require('express')
const app = express()

const adminRoutes = require('./routes/admin')
const usuarioRoutes = require('./routes/usuario')

const cookieParser = require('cookie-parser')

// app.use(express.static('public'))
app.use('/static', express.static('public'))

app.use(express.json())
app.use(cookieParser())

app.use((req, res, next) => {
  console.log('Executando Middkeware em nivel de aplicação')

  return next()
})

app.get('/setcookie', (req, res) => {
  res.cookie('user', 'Glaucio Daniel', {maxAge: 900000, httpOnly: true})
  return res.send('Cooki foi gravado com sucesso!')
})

app.get('/getcookie', (req, res) => {
  console.log(req.cookies);
  let user = req.cookies['user']
  if(user){
    return res.send(user)
  }
})

app.get('/', (req, res) =>  {
  res.send('Vai Corinhians!')
})

app.use('/admin', adminRoutes)
app.use('/usuarios', usuarioRoutes)

/* app.get('/admin', (req, res) =>  {
  res.send('Acessando a Administração')
})

app.get('/admin/:id', (req, res) =>  {
  res.send('Acessando a Administração com o id: ' + req.params.id)
})

app.post('/admin', (req, res) =>  {
  const corpo = `Login: ${req.body.login}\n Senha: ${req.body.senha}`
  res.send('Acessando a Administração Via POST: '+corpo)
})

// path = Alterando uma parte da informação.
app.patch('/admin/:id', (req, res) =>  {
  res.send('Acessando a Administração Via PATCH')
})

app.put('/admin/:id', (req, res) =>  {
  res.send('Acessando a Administração Via PUT')
})

app.delete('/admin/:id', (req, res) =>  {
  res.send('Acessando a Administração Via delete')
}) */

app.get('*', (req, res, next) => {
  setImmediate(() => {
    next(new Error('Temos um problema'))
  })
})

app.use((err, req, res, next) => {
  // console.log(err.stack)
  console.log('Geramos um erro, veja as instruções para corrigir!')
  res.status(500).json({message: err.message})
})

app.listen(3000, () => {
  console.log('Server running: http://localhost:3000')
})