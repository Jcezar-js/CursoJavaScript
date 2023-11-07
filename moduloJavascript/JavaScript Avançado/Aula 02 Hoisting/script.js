/*
Hoisting = ERGUER

Hoisting é o comportamento padrão d JavaScript de mover as declarações para o topo de um escopo

Boa prática = manter a chamada da função abaixo da declaração

no JS não está errado fazer o contrário, mas não é uma boa prática.
*/

function teste (){
  
  function outraFunction() {
    console.log('ok sou a outra função')
  }

  outraFunction()
}

teste()
