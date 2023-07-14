console.log('Executando modulee-01.js')

// const oculta = () => {
//   console.log('Executando função oculta')
// }

// module.exports.oculta = () => {
oculta = () => {
  console.log('Executando função oculta')
}

// module.exports.executa = () => {
executa = () => {
  console.log('Executando a função executa')
}

// module.exports.welcome = `Bem vindo ao módulo module-01.js`
welcome = `Bem vindo ao módulo module-01.js`

module.exports = {executa, welcome}

//Node no modo REPL || shell node.
