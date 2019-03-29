var addButtom = document.querySelector('#search-pacient');

addButtom.addEventListener('click', function(){

    var xhr= new XMLHttpRequest();  //object responsable to make Http requisitions
    
    xhr.open('GET', 'https://api-pacientes.herokuapp.com/pacientes'); //open conection with that andress

    xhr.addEventListener('load', function(){   //call this function with load
        
        var ajaxError = document.querySelector('#ajax-error');

        if(xhr.status == 200){
            ajaxError.classList.add('display-field');
            var resp = xhr.responseText; //aloc xhr content in resp
            var pacients = JSON.parse(resp); //pass a JSON text and return a Javascript object

            pacients.forEach(function (pacient) {

                addPacientInTable(pacient);
                //console.log(pacient);

            });

        }else{
            // console.log(xhr.status);
            // console.log(xhr.responseText);    
            ajaxError.classList.remove('display-field');
        }

    });

    xhr.send();
    
});