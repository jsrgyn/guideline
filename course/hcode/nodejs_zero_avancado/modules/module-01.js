console.log('Executando modulee-01.js')

// const oculta = () => {
//   console.log('Executando função oculta')
// }

// module.exports.oculta = () => {
// oculta = () => {
const oculta = () => {
  console.log('Executando função oculta')
}

// module.exports.executa = () => {
// executa = () => {
const executa = () => {
  console.log('Executando a função executa')
}

// module.exports.welcome = `Bem vindo ao módulo module-01.js`
// welcome = `Bem vindo ao módulo module-01.js`
const welcome = `Bem vindo ao módulo module-01.js`

// module.exports = {executa, welcome}
module.exports = {executa, welcome, oculta}

//Node no modo REPL || shell node.
