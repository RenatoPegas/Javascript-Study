var title = document.querySelector('.main-title');
title.textContent = 'Aparecida Nutricionista'; //altera o conteúdo da tag h1 

function imcCalc(pacientData){
    
    var tdPeso = pacientData.querySelector('.info-peso'); //busca no pacient o elemento peso
    var peso = tdPeso.textContent;

    var tdAltura = pacientData.querySelector('.info-altura');
    var altura = tdAltura.textContent;

    var lineImc = pacientData.querySelector('.info-imc');

    var pesoCheck = true;
    var alturaCheck = true;

    if(peso <= 0 || peso >= 1000){
        console.log('peso invalido');
        pesoCheck = false;
        lineImc.textContent = 'peso invalido';
        pacientData.classList.add('invalid-pacient');  
    }

    if (altura <= 0 || altura >= 3.00){
        console.log('altura invalida');
        alturaCheck = false;
        lineImc.textContent = 'altura invalida';
        pacientData.classList.add('invalid-pacient');  
    }

    if (pesoCheck  && alturaCheck){

    var imc = peso / (altura * altura);
    lineImc.textContent = imc.toFixed(2);

    }

}

var pacient = document.querySelectorAll('.paciente');

for(i=0; i < pacient.length; i++){

    imcCalc(pacient[i]);

}






