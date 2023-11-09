const clientes = [
  {name: 'Fulano', lastName:'Da Silva'},
  {name:'Ciclano', lastName:'Bezerra'},
  {name:'Beltrano', lastName:'Moreno'}
]
const users = [
  {name: 'Guilherme', lastName:'Da Silva'},
  {name:'Carlos', lastName:'Bezerra'},
  {name:'Lucas', lastName:'Moreno'}
]

// ['Fulano Da Silva', 'Ciclano Santos']

let clientesFinal = []
clientes.forEach(function (cliente) {
  clientesFinal.push(cliente.name + ' ' + cliente.lastName)
})
console.log('m�todo forEach: \n')
console.log(clientesFinal)

//Tudo que for realizado dentro do Map retornar� um Array
const usersFinal = users.map(user => user.name + ' ' + user.lastName)
console.log('m�todo Map: \n')
console.log(usersFinal)
