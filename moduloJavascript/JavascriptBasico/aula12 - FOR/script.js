let opcoes

for (let i = 2022; i >= 1900; i--) {
  opcoes += `<option> ${i} </option>`

  document.querySelector('#anoNasc').innerHTML = opcoes
}

let lista = ''

let clientes = ['Julio','João','Nicoly','Randall','Ana']
                      // vai sempre pegar o array completo
for (let i = 0; i <= clientes.length -1; i++){

  lista += `<li>${clientes[i]}</li>`
}
document.querySelector('#listaClientes').innerHTML= lista