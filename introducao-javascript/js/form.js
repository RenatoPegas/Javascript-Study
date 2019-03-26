var addButtom = document.querySelector('#adicionar-paciente');

addButtom.addEventListener('click', function (event) {    //utilizar função anonima

    event.preventDefault(); //previnirá o comportamento padrão da página

    var form = document.querySelector('#form-add'); //pegará os elementos de 'form-id' e colocará na variável 'form' 

    var pacient = getPacientValor(form); //coloca na variavel o objeto paciente

    var pacientTr = buildTr(pacient);   //monta a Tr

    var errors = checkPacient(pacient); //verifica os se foi digitado um campo errado

    if(errors.length > 0 ){
        
       showErrorMessage(errors);
        return;
    }

    var table = document.querySelector('#tabela-pacientes');
    table.appendChild(pacientTr);               //emblobará os elementos de 'pacientTr' no corpo da '#tabela-pacientes'

    form.reset();
    var errorMessage = document.querySelector('#error-message');
    errorMessage.innerHTML = '';
    
});

function getPacientValor(form){

    var pacient = {                //objeto paciente
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: valorImc(form.peso.value, form.altura.value)
    }

    return pacient;
}

function buildTr(pacient){

    var pacientTr = document.createElement('tr'); //usará a variável para criar o elemento "tr" no html
    pacientTr.classList.add('pacient');

    pacientTr.appendChild( buildTd(pacient.nome, 'info-nome') );                 //englobará o elemento 'tdNome' no elemento pai 'pacientTr'
    pacientTr.appendChild( buildTd(pacient.peso, 'info-peso') );                 //englobará o elemento 'tdPeso' no elemento pai 'pacientTr'
    pacientTr.appendChild( buildTd(pacient.altura, 'info-altura') );             //englobará o elemento 'tdAltura' no elemento pai 'pacientTr'
    pacientTr.appendChild( buildTd(pacient.gordura, 'info-gordura') );           //englobará o elemento 'tdGordura' no elemento pai 'pacientTr'
    pacientTr.appendChild( buildTd(pacient.imc, 'info-imc') );

    return pacientTr;
}

function buildTd(data, classe){
    
    var td = document.createElement('td');   //monta uma td
    td.textContent = data;                   //aloca a variavel 'data' dentro do campo 'td'
    td.classList.add(classe);                //adiciona uma classe

    return td;
}

function checkPacient(pacient){

    var errors = []; //variavel para um arrat de erros

    if(pacient.nome.length == 0){
        errors.push('Insira um nome'); //insere uma string no array
    }

    if(!validatePeso(pacient.peso)){
        errors.push('Peso invalido');  //insere uma string no array
    }
        
    if(!validateAltura(pacient.altura)){
        errors.push('Altura Invalida'); //insere uma string no array
    }

    if (pacient.gordura.length == 0) {
        errors.push('A gordura não pode ser em branco'); //insere uma string no array
    }

    if (pacient.peso.length == 0) {
        errors.push('O peso não pode ser em branco'); //insere uma string no array
    }

    if (pacient.altura.length == 0) {
        errors.push('A altura não pode ser em branco'); //insere uma string no array
    }

    return errors;

}

function showErrorMessage(errors){
    
    var ul = document.querySelector('#error-message'); //cria a variavel ul 
    ul.innerHTML = "";

    errors.forEach(function(error){ //forEach é um for que sabe o limite dos seus elementos
        var li = document.createElement('li');
        li.textContent = error;
        li.classList.add('invalid-pacient');
        ul.appendChild(li);
    });
  
}