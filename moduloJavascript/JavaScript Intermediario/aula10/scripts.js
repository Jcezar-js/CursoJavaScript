let formulario = document.querySelector('#formCadastro')
let toast = document.querySelector('.toast')




formulario.onsubmit = function(evento){
  evento.preventDefault()


  let error = false
  let inputNome = document.forms['formCadastro']['nome']  
  let nameError = inputNome.nextSibling.nextSibling

  if (!inputNome.value) {
    error = true
    inputNome.classList.add('inputError') 
    nameError.innerText = 'O campo "Nome" está vazio!'

  } else {
    inputNome.classList.remove('inputError')
    nameError.innerText = ''
  }
  


  let inputMail = document.forms['formCadastro']['email']
  let mailError = inputMail.nextSibling.nextSibling

  if (!inputMail.value) {
    error = true
    inputMail.classList.add('inputError') 
    mailError.innerText = 'O campo "Email" está vazio!'

  } else {
    inputMail.classList.remove('inputError')
    mailError.innerText = ''
  }



  let selectCity = document.forms['formCadastro']['cidade']
  let cityError = selectCity.nextSibling.nextSibling

  if (!selectCity.value) {
    error = true
    selectCity.classList.add('inputError') 
    cityError.innerText = 'Selecione uma cidade!'

  } else {
    selectCity.classList.remove('inputError')
    cityError.innerText = ''
  }




  
  if (!error) {
    toast.classList.add('visible')
    toast.innerText = 'Formulário cadastrado com sucesso!'
    
    setTimeout(function(){
      formulario.submit()
      toast.classList.remove('visible')
    },5000)


  }else {
    toast.classList.add('visibleError')
    toast.innerText = 'Erro ao cadastrar formulário, verifique os campos com erro.'
    
    setTimeout(function(){
      toast.classList.remove('visibleError')
    },3000)
  }

}