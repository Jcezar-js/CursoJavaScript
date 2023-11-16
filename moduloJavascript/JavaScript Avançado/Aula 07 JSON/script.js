/*
JSON

JAVASCRIPT OBJECT NOTATION

*/

const objeto = {
  nome: 'fulano',
  idade: 23,
}

//objeto para json
const json = JSON.stringify(objeto)

//json para objeto
const jsonParseado = JSON.parse(json)

console.log(jsonParseado.idade)