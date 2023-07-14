// throw new Error('Ah não, deu erro! Não possivel, na minha máquina funciona!')

// console.log('Depois do erro!')

function execute(){
  executeTo()
}

function executeTo(){
  throw new Error('Ah não, deu erro! Não é possivel, na minha máquina funciona!')
}

function init(){
  try {
   execute()
  } catch (e) {
    // console.log(`Temos um problema! ${e.message}`)
    console.log(`Temos um problema! ${e}`)
  }
}

init()

console.log('Depois do Erro')