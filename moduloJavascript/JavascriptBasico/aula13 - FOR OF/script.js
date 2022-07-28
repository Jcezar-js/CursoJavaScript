let clientes = [
  {
    nome: 'Julio',
    idade:21,
    Linguagens: ['javascript', 'java', 'Electron']
  },

  {
    nome:'Nicoly',
    idade: 30,
    Linguagens: ['scratch', 'java', 'Jquery']
  },

  {
    nome:'Fulano',
    idade: 24,
    Linguagens: ['C++', 'R', 'python']
  },
]

// let i = 0

// for (i; i < clientes.length; i++) {
//   console.log(clientes[i].nome)
// }

// Percorre todo o Array de forma simplificada
// for (let cliente of clientes){

// }


// variavel inicialiazada
let htmlClientes = ''

// percorrendo Array
for(let cliente of clientes){

  let listaLinguagens = ''
    // inserindo infos da lista secundária (por objeto)
    for(let linguagem of cliente.Linguagens){
      listaLinguagens += `<li>${linguagem}</li>`
    }


  // Inserindo infos no HTML
  htmlClientes += `
    <li> 
      <b>Nome: </b>${cliente.nome} <br>
      <b>Idade:</b>${cliente.idade} <br>
      <b>Linguagens:</b><br>
        <ul>
          ${listaLinguagens}
        </ul>
    </li>
  `
}
// linha responsável por inserir o código javascript no HTML
document.querySelector('#listaClientes').innerHTML = htmlClientes