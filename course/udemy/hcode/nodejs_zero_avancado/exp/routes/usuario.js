const express = require('express')
const router = express.Router()

function logReq(res, res, next) {
  console.log('Executando a Função Middleware para a rota usuários')
  return next()
}

router.get('/', logReq, (req, res) =>  {
  res.send('Listandos os usuários')
})

router.get('/:id', (req, res) =>  {
  res.send('Listando o usuário com o id: ' + req.params.id)
})

module.exports = router