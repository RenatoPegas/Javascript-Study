
var filterField = document.querySelector("#table-filter");  //search of names

filterField.addEventListener("input", function(){ //event when digit in filter-field

    var pacients = document.querySelectorAll(".pacient"); //select all pacients

    if(this.value.length > 0){ //"this" in that case = field-filter ------ if the content of filter-field is major than 0

        for(var i = 0; i < pacients.length; i++){ 

            var pacient = pacients[i];
            var tdName = pacient.querySelector('.info-name');
            var name = tdName.textContent;
            var expression = new RegExp(this.value, "i"); //regular expression for a search and without case-sensitive


            if(!expression.test(name)){                   //test with regular expression ------ show only the searched names
                pacient.classList.add('display-field');
            }else{
                pacient.classList.remove('display-field');
            }
        }
        
    }else{

        for (var i = 0; i < pacients.length; i++){ //back the original table if content of filter-field is blank

            var pacient = pacients[i];
            pacient.classList.remove('display-field');

        }
    }
});