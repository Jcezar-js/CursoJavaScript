let quadrado = document.querySelector('.quadrado');

function minhaFuncao(evento) {
  console.log(evento.key);
}
// alguns tipos de evendo
// quadrado.onclick = minhaFuncao;
// quadrado.onmousemove = minhaFuncao;
// quadrado.onmouseenter = minhaFuncao;
// quadrado.onmouseout = minhaFuncao;

// mostra a tecla pressionada no teclado
window.addEventListener('keypress', minhaFuncao)