let diaSemana = new Date().getDay()

let nomeDiaSemana

switch(diaSemana){

  case 0:
    nomeDiaSemana = "Hoje é Domingo"
    break;
  case 1:
    nomeDiaSemana = "Hoje é Segunda-feira"
    break;
  case 2:
    nomeDiaSemana = "Hoje é Terça-feira"
    break;
  case 3:
    nomeDiaSemana = "Hoje é Quarta-feira"
    break;
  case 4:
    nomeDiaSemana = "Hoje é Quinta-feira"
    break;
  case 5:
    nomeDiaSemana = "Hoje é Sexta-feira"
    break;
  case 6:
    nomeDiaSemana = "Hoje é Sábado"
    break;
}

document.write(nomeDiaSemana)