let nome = prompt('Digite seu nome')
let idade = prompt('Digite sua idade')

let maiorOuMenor

if (idade >= 18) {
  maiorOuMenor = 'maior'
} else{
  maiorOuMenor = 'menor'
}

if (nome === 'Thomas Anderson' || nome === 'thomas anderson') {
  document.querySelector('#mensagemPersonalizada').innerHTML = (`Olá ${nome}, você é ${maiorOuMenor} de idade e é um personagem do filme "The Matrix"`)
} else{
  document.querySelector('#mensagem').innerHTML = (`Olá ${nome}, você é ${maiorOuMenor} de idade`)
}