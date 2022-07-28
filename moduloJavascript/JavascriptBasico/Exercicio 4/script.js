
function input() {
  
  let nome = prompt('Digite seu Nome')
  let idade = prompt ('Digite sua Idade')

  let maiorOuMenor

  if (idade >= 18) {
    maiorOuMenor = 'maior'
  } else{
    maiorOuMenor = 'menor'
  }

  if (nome === '' || idade === '') {

    alert('Preencha os campos corretamente.')

  } else if (nome === 'Thomas Anderson' || nome === 'thomas anderson' || nome === 'THOMAS ANDERSON'|| nome === 'Thomas anderson'){

    document.querySelector('#saudacao').innerHTML = (`Olá ${nome}, você é ${maiorOuMenor} de idade.`)

    document.querySelector('#mensagemPersonalizada').innerHTML = ('E também é um personagem do filme "The Matrix"')

  }else{
    document.querySelector('#saudacao').innerHTML = (`Olá ${nome}, você é ${maiorOuMenor} de idade.`)
  }
}

