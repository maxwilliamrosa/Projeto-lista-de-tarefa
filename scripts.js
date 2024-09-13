const button = document.querySelector('.button-task')
const input = document.querySelector('.input-task')
const listaCompleta = document.querySelector('.list-task')


let minhaListaDeItens = []

function adicionarNovaTarefa() {
  minhaListaDeItens.push({
    tarefa: input.value,
    concluida: false,
  })
    /*console.log(minhaListaDeItens) voce conseguer verificar na aba console  */
    mostrarTarefas ()
    input.value = ''
}
function mostrarTarefas () {
    let novaLI = ''    

    minhaListaDeItens.forEach((item,posicao) => {
        novaLI = novaLI + `
        <li class="task ${item.concluida && "done"}">
                <img src="img/verificado.png" alt="check-na-tarefa" onclick="tarefaConcluida(${posicao})">
                <p>${item.tarefa}</p>
                <img src="img/lixeira.png" alt="Lixeira" onclick="deletarItem(${posicao})">
            </li>`
        })
    listaCompleta.innerHTML = novaLI

    localStorage.setItem('lista',JSON.stringify(minhaListaDeItens))


}
function tarefaConcluida(posicao) {
    minhaListaDeItens[posicao].concluida = !minhaListaDeItens[posicao].concluida
    mostrarTarefas ()
}

function deletarItem(posicao){
       minhaListaDeItens.splice(posicao,1)
       mostrarTarefas()
    }

function recarregarTarefas(){
    const tarefasDoLocalStorage = localStorage.getItem('lista')
    minhaListaDeItens = JSON.parse(tarefasDoLocalStorage)
}
recarregarTarefas()
button.addEventListener('click', adicionarNovaTarefa)