/*
Hoisting = ERGUER

Hoisting � o comportamento padr�o d JavaScript de mover as declara��es para o topo de um escopo

Boa pr�tica = manter a chamada da fun��o abaixo da declara��o

no JS n�o est� errado fazer o contr�rio, mas n�o � uma boa pr�tica.
*/

function teste (){
  
  function outraFunction() {
    console.log('ok sou a outra fun��o')
  }

  outraFunction()
}

teste()
