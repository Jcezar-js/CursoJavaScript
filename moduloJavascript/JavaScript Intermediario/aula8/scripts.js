let toast = document.querySelector('.toast')
let btnCadastro = document.querySelector('#btnCadastro')




btnCadastro.onclick = function () {
  var input = document.querySelector('#input')
  var tarefa = input.value
  toast.innerHTML = (`Tarefa: "${tarefa}" salva com sucesso!`)

  toast.classList.add('visible')



  setTimeout(function(){
    toast.classList.remove('visible')
  },5000)
}

