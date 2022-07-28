let inputNota1 = prompt('Digite a primeira nota')
let inputNota2 = prompt('Digite a segunda nota')

// parseInt pegará uma string e transformará em um número
let nota1 = parseInt(inputNota1)
let nota2 = parseInt(inputNota2)


let media = (nota1 + nota2)/2

let mediaMinima = 7

if (media < mediaMinima && media > 4) {

  document.write(`Sua média foi: ${media}, você pode melhorar`)

} else if (media <= 4){

  document.write(`Você está reprovado! Sua média foi: ${media} =(`)

} else if (media >= mediaMinima && media < 10){

  document.write(`Parabéns! Sua média foi: ${media} =)`)

}else {

  document.write(`Parabéns você gabaritou! ${media} =DDDDDDDDDD`)

}
