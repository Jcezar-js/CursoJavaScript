const clientes = [
  {name: 'Fulano', lastName:'Da Silva', score: 24},
  {name:'Ciclano', lastName:'Bezerra', score: 60},
  {name:'Beltrano', lastName:'Moreno', score: 78},
  {name:'Dildano', lastName:'Lima', score: 97},
  {name:'Zetrino', lastName:'Filho', score: 37}
]
// acc = accumulator
// curr = current
const clientesFinal = clientes.reduce((acc, curr) =>{

  if (curr.score > 50){
    acc.pass.push(curr)
  } else {
    acc.fail.push(curr)
  }

  return acc
}, {
  pass: [],
  fail: []
})

console.log(clientesFinal)


const numeros = [1,2,3,4]
const numerosFinal =  numeros.reduce((acc, curr)=>{
  let i = 0

  
  acc += ` - ${curr + 1}`

  return acc
},'')

console.log (numerosFinal)