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

    return pacient = {                //pacient object
        name: form.name.value,
        weight: form.weight.value,
        height: form.height.value,
        fat: form.fat.value,
        imc: valorImc(form.weight.value, form.height.value)
    }

    
}

function buildTr(pacient){
                                                  
    var pacientTr = document.createElement('tr');  //use a variable to create a element 'tr into HTML
    pacientTr.classList.add('pacient');            //add pacient class

    pacientTr.appendChild( buildTd(pacient.name, 'info-name') );         //append the 'td' element 'name' into a 'tr
    pacientTr.appendChild( buildTd(pacient.weight, 'info-weight'));      //append the 'td' element 'weight' into a 'tr
    pacientTr.appendChild( buildTd(pacient.height, 'info-height'));      //append the 'td' element 'height' into a 'tr
    pacientTr.appendChild( buildTd(pacient.fat, 'info-fat') );           //append the 'td' element 'fat' into a 'tr
    pacientTr.appendChild( buildTd(pacient.imc, 'info-imc'));            //append the 'td' element 'imc' into a 'tr    

    return pacientTr;
}

function buildTd(data, classe){
    
    var td = document.createElement('td');   //build a 'td'
    td.textContent = data;                   //allocates the 'data' variable into the 'td' field
    td.classList.add(classe);                //add a css class

    return td;
}

function checkPacient(pacient){

    var errors = []; //variavel para um arrat de erros

    if(pacient.name.length == 0){
        errors.push('Insira um nome'); //insere uma string no array
    }

    if(!validateWeight(pacient.weight)){
        errors.push('Peso invalido');  //insere uma string no array
    }
        
    if(!validateHeight(pacient.height)){
        errors.push('Altura Invalida'); //insere uma string no array
    }

    if (pacient.fat.length == 0) {
        errors.push('A gordura não pode ser em branco'); //insere uma string no array
    }

    if (pacient.weight.length == 0) {
        errors.push('O peso não pode ser em branco'); //insere uma string no array
    }

    if (pacient.height.length == 0) {
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