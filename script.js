
let option
let list = []

while (option != 3) {
  option = Number(prompt(`
  Olá usuário ! Digite o número da opção desejada:

  1. Cadastrar um item na lista
  2. Mostrar itens cadastrados
  3. Sair do progama.
`))

  if (option == 1) {
    let item = prompt('Digite o item que deseja adicionar: ')
    list.push(item)
  }
  else if (option == 2) {
    if (list.length == 0) {
      alert('Você não possui itens cadastrados')
    } else {
      alert(list)
    }
  } else if (option == 3) {
    alert('Tchau');
  } else {
    alert('Opção inválida !')
  }
}



