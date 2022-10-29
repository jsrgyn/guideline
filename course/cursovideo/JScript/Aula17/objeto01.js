/* 
// let amigo = []
let amigo = {}
console.log(typeof amigo)
 */

let amigo = {nome: 'Jose',
sexo: 'M',
peso: 85.4,
engordar(p=0){
    console.log('Engordou')
    this.peso += p
}}

console.log(amigo)
amigo.engordar(2)
console.log(amigo)