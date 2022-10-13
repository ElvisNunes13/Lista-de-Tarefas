const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefa = document.querySelector('.tarefa');

function criaLi(){
    const li = document.createElement('li');
    return li;
}

inputTarefa.addEventListener('keypress', function(e){
    if(e.keyCode === 13){
        if(!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
    }
});

function limpaTarefa (){
    inputTarefa.value = '';
    inputTarefa.focus();
}

function criaBotaoApagar(li){
    li.innerText += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar';
    botaoApagar.setAttribute('class', 'apagar');
    li.appendChild(botaoApagar);
}

function criaTarefa(textoInput){
    const li = criaLi()
    li.innerText = textoInput;
    tarefa.appendChild(li)
    limpaTarefa();
    criaBotaoApagar(li);
    salvarTarefa();
}

btnTarefa.addEventListener('click', function(){
    if(!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
});

document.addEventListener('click', function(e){
    const el = e.target;
    if(el.classList.contains('apagar')){
        el.parentElement.remove();
        salvarTarefa();
    }
});

function salvarTarefa(){
    const liTarefas = tarefa.querySelectorAll('li');
    const listaDeTarefa = [];

    for(let tarefas of listaDeTarefa){
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('apagar', '');
        listaDeTarefa.push(tarefaTexto);
    }

    const tarefasJSON = JSON.stringify(listaDeTarefa);
    localStorage.setItem('tarefas', tarefasJSON);
}

function adicionaTarefaSalva(){
    const tarefas = localStorage.getItem('tarefa');
    const listaDeTarefa = JSON.parse(tarefa);

    for(let tarefas of listaDeTarefa){
        criaTarefa(tarefas);
    }
}
adicionaTarefaSalva();