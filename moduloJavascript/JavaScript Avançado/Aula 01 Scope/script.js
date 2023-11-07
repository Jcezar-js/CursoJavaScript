/*
Global 
Local
- O escopo determina a visibilidade de uma variável
- AS funções no js criam seu escopo
- as variáveis de uma função não são acessíveis fora dela.
- declarações de variáveis sem prefixo tornam-se globais
*/

function teste(){
  let a =123;
  console.log(a);
}

teste()
