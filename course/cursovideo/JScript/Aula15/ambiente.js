// let num = []
let num = [5, 8, 2, 9, 3]

console.log(num)
num.sort()
console.log(`Nosso vetor é ${num}`)
num.push(1)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor é ${num[0]}`)
console.log(num)

let pos = num.indexOf(8)

if (pos == -1) {
    console.log(` O valor não foi encontrado`)
} else {
    console.log(`O valor está na posição ${pos}`)
}