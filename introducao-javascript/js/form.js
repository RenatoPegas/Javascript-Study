var addButtom = document.querySelector('#adicionar-paciente');

addButtom.addEventListener('click', function (event) {    //utilizar função anonima

    event.preventDefault(); //previnirá o comportamento padrão da página

    var form = document.querySelector('#form-add'); //pegará os elementos de 'form-id' e colocará na variável 'form' 

    var pacient = getPacientValor(form);

    var pacientTr = buildTr(pacient);

    var table = document.querySelector('#tabela-pacientes');
    table.appendChild(pacientTr);               //emblobará os elementos de 'pacientTr' no corpo da '#tabela-pacientes'

    form.reset();
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

    pacientTr.appendChild(buildTd(pacient.nome, 'info-nome'));                 //englobará o elemento 'tdNome' no elemento pai 'pacientTr'
    pacientTr.appendChild(buildTd(pacient.peso, 'info-peso'));                 //englobará o elemento 'tdPeso' no elemento pai 'pacientTr'
    pacientTr.appendChild(buildTd(pacient.altura, 'info-altura'));             //englobará o elemento 'tdAltura' no elemento pai 'pacientTr'
    pacientTr.appendChild(buildTd(pacient.gordura, 'info-gordura'));           //englobará o elemento 'tdGordura' no elemento pai 'pacientTr'
    pacientTr.appendChild(buildTd(pacient.imc, 'info-imc'));

    return pacientTr;
}

function buildTd(data, classe){
    
    var td = document.createElement('td');   //monta uma td
    td.textContent = data;                   //aloca a variavel 'data' dentro do campo 'td'
    td.classList.add(classe);                //adiciona uma classe

    return td;
}