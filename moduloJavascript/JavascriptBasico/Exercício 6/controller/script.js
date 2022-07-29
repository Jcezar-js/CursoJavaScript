let listaAtores = [
  {
    nome: 'Keanu Reeves',
    personagem: 'Neo',
    filme: 'The Matrix',
  },

  {
    nome: 'David Prowse',
    personagem: 'Darth Vader',
    filme: 'Star Wars Episódios IV-VI',
  },

  {
    nome: 'Bruce Wayne',
    personagem: 'Batman',
    filme: 'Batman - O Início'
  },
]

let htmlAtores = ''

for (let i = 0; i < listaAtores.length; i++) {
  let ator = listaAtores[i]
  let nome = ator.nome
  let personagem = ator.personagem
  let filme = ator.filme


  htmlAtores += `
    <div class = "box">
      <h1>${nome}</h1>
      <p>Interpreta o personagem ${personagem} no filme ${filme} </p>
    </div>
  `
  

  document.querySelector('.container').innerHTML = htmlAtores
}
 