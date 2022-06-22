/*
String
Number
Boolean
Array
Object
Undefined
Null
*/

// String
let nome = 'Julio'
console.log(nome)

//String concatenada
let sobrenome = 'Cezar'
// console.log(nome + ' ' + sobrenome) //Antigo método

// Novo método "String literal"
console.log(`${nome} ${sobrenome}`)


// Number
let idade = 21
console.log(idade)
console.log(idade + 10)

// number float
let porcentagem = 10.2
console.log(porcentagem + '%')

// boolean (true ou false)
let maiorDeIdade = true
console.log(maiorDeIdade)

let menorDeIdade = false
console.log(false)

// Array - permite guardar mais de 1 valor
let habilidades = ['javaScript', 'PHP', 'Python']
console.log(habilidades)

// mostra a quantidade de itens dentro do array
console.log(habilidades.length)

// busca um id específico
console.log(habilidades[2])


// Object
let pessoa = {
  nome: 'Julio',
  sobrenome: 'Cezar',
  idade: '21',
  habilidades: ['c++', 'c#', 'Python']
}
console.log(pessoa)
console.log(pessoa.sobrenome)
console.log(pessoa.habilidades[1])

// undefined
let endereco
console.log(endereco)

// null
let cidade = null
console.log(cidade)
