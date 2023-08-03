const express = require('express')
const router = express.Router()

router.get('/', (req, res) =>  {
  res.send('Acessando a Administração')
})

router.get('/:id', (req, res) =>  {
  res.send('Acessando a Administração com o id: ' + req.params.id)
})

router.post('', (req, res) =>  {
  const corpo = `Login: ${req.body.login}\n Senha: ${req.body.senha}`
  res.send('Acessando a Administração Via POST: '+corpo)
})

// path = Alterando uma parte da informação.
router.patch('/:id', (req, res) =>  {
  res.send('Acessando a Administração Via PATCH')
})

router.put('/:id', (req, res) =>  {
  res.send('Acessando a Administração Via PUT')
})

router.delete('/:id', (req, res) =>  {
  res.send('Acessando a Administração Via delete')
})

module.exports = router