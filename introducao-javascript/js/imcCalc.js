// var title = document.querySelector('.main-title');
// title.textContent = 'Aparecida Nutricionista'; //altera o conteúdo da tag h1 

// title.addEventListener('click', function(){

//     console.log('olha a bait');

// });

function imcCalc(pacientData){
    
    var tdWeight = pacientData.querySelector('.info-weight'); //busca no pacient o elemento weight (peso)
    var weight = tdWeight.textContent;

    var tdHeight = pacientData.querySelector('.info-height');   //busca no pacient o elemento height (altura)
    var height = tdHeight.textContent;

    var lineImc = pacientData.querySelector('.info-imc');

    var weightCheck = validateWeight(weight);
    var heightCheck = validateHeight(height);

    if(!weightCheck){
        console.log('peso invalido');
        weightCheck = false;
        lineImc.textContent = 'peso invalido';
        pacientData.classList.add('invalid-pacient');  
    }

    if (!heightCheck){
        console.log('altura invalida');
        heightCheck = false;
        lineImc.textContent = 'altura invalida';
        pacientData.classList.add('invalid-pacient');  
    }

    if (weightCheck  && heightCheck){

        var imc = valorImc(weight, height);
        lineImc.textContent = imc;

    }

}

function validateWeight(weight){

    if (weight >= 0 && weight <= 300){

        return true;

    }else{

        return false;

    }
    
}

function validateHeight(height){

    if(height >= 0 && height <=3.00){

        return true;

    }else{

        return false;

    }

}

function valorImc(weight, height){

    var imc = 0;
    imc = weight / (height * height);
    return imc.toFixed(2);

}

var pacient = document.querySelectorAll('.pacient');

for(i=0; i < pacient.length; i++){

    imcCalc(pacient[i]);

}