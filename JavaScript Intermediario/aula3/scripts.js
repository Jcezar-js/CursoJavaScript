// Seletor por ID
// document.querySelector('#title').innerHTML = 'Exemplo'

// Seletor por TAG
// document.querySelector('a').innerHTML = 'teste ancora'

//Selecionando mais de 1 tag;
// let ancoras = document.querySelectorAll('a') //Função anonima/callback
// 
// Alterando o array de tags;
// ancoras.forEach(function(elemento){
// 
  // elemento.innerHTML = 'teste ancora'
// })


// Selecionando mais de 1 item por classe.
let divs = document.querySelectorAll('.box')

// contador
let i = 0

// Alterando o nome das DIVS e adicionando contador.
divs.forEach(function(box){
  i ++

  box.innerHTML = 'BOX ' + i
})