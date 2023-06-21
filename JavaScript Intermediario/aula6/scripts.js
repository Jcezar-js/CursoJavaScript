let botaoTeste = document.querySelector('#botaoTeste')

let i = 0

function cliqueBotao() {
  i ++
  console.log('funciona 1')
  if (i >= 5) {
  botaoTeste.removeEventListener('click', cliqueBotao)
  }

}
//addEventListener
botaoTeste.addEventListener('click', cliqueBotao)

//onclick
//botaoTeste.onclick = cliqueBotao