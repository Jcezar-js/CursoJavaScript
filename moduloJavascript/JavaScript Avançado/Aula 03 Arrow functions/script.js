/*
Arrow functions

Permitir a sintaxe de fun��o mais curta;
*/

//retorno impl�cito, somente quando tem 1 par�metro
const somaReturnImplicito = (param1, param2) =>  param1 + param2

const resultado = somaReturnImplicito (11,2)
console.log(resultado)


const teste = param1 => {
  return (param1)
}

console.log(teste('ok'))