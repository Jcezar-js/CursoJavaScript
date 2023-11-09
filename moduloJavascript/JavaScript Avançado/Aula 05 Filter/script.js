const clientes = [
  {name: 'Fulano', lastName:'Da Silva', age: 14},
  {name:'Ciclano', lastName:'Bezerra', age: 18},
  {name:'Beltrano', lastName:'Moreno', age: 23}
]


const clientesMaiores = clientes.filter(cliente=>{

    if(cliente.age >= 18) {
      return true
    } 
    return false
  })

console.log(clientesMaiores)