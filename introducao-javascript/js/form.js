var addButtom = document.querySelector('#adicionar-paciente');

addButtom.addEventListener('click', function (event) {    //utilizar função anonima

    event.preventDefault(); //previnirá o comportamento padrão da página

    var form = document.querySelector('#form-add'); //pegará os elementos de 'form-id' e colocará na variável 'form' 

    var name = form.nome.value;             //variável que alocará o valor do campo 'nome'
    var peso = form.peso.value;             //variável que alocará o valor do campo 'peso'
    var altura = form.altura.value;         //variável que alocará o valor do campo 'altura'
    var gordura = form.gordura.value;       //variável que alocará o valor do campo 'gordura'

    var pacientTr = document.createElement('tr'); //usará a variável para criar o elemento "tr" no html

    var tdNome = document.createElement('td');
    var tdPeso = document.createElement('td');
    var tdAltura = document.createElement('td');
    var tdGordura = document.createElement('td');
    var tdImc = document.createElement('td');

    tdNome.textContent = name;                  //aloca a variavel 'name' dentro do campo 'tdNome'
    tdPeso.textContent = peso;                  //aloca a variavel 'peso' dentro do campo 'tdPeso'
    tdAltura.textContent = altura;              //aloca a variavel 'altura' dentro do campo 'tdAltura'
    tdGordura.textContent = gordura;            //aloca a variavel 'gordura' dentro do campo 'tdGordura'

    pacientTr.appendChild(tdNome);              //emblobará o elemento 'tdNome' no elemento pai 'pacientTr'
    pacientTr.appendChild(tdPeso);              //emblobará o elemento 'tdPeso' no elemento pai 'pacientTr'
    pacientTr.appendChild(tdAltura);            //emblobará o elemento 'tdAltura' no elemento pai 'pacientTr'
    pacientTr.appendChild(tdGordura);           //emblobará o elemento 'tdGordura' no elemento pai 'pacientTr'

    var table = document.querySelector('#tabela-pacientes');
    table.appendChild(pacientTr);               //emblobará os elementos de 'pacientTr' no corpo da '#tabela-pacientes'

});