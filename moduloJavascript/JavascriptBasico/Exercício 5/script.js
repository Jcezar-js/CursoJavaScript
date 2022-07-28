function tabuada(){

  let inputTabuada = prompt('Digite a tabuada que deseja saber')
  let tabuada = parseInt(inputTabuada)

  let i = 0


  for (i; i <= 10; i++) {
  
    let resultado = tabuada * i

    document.write(`${tabuada} X ${i} = ${resultado} <br>`)
  }

}
