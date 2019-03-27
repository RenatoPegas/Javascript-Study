var table = document.querySelector('table');

table.addEventListener('dblclick', function(event){

    event.target.parentNode.classList.add('fade-out');

    setTimeout(function(){                  //remove after 300 miliseconds
         event.target.parentNode.remove();  //remove parent of td
    },300);

});

// pacients.forEach(function(pacient){

//     pacient.addEventListener('dblclick', function(){
//        this.remove();  //reserved word linked with 'pacient'
//     });

// });