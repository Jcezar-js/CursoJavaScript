let contador = document.querySelector('#contador')

let count = 0
let intervalo = setInterval(function(){
  count++
  contador.innerText = count
}, 1)

let botaoPausar = document.querySelector("#pausar")
botaoPausar.onclick = function(){
  clearInterval(intervalo)
}