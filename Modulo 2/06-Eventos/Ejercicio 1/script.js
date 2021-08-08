/*Ejercicio 1
Capturar tres números por medio de cajas de texto, compararlos e indicar cual número es mayor y cual menor. 
Adicionar una validación en caso de que sean iguales. Implementar el evento DOMContentLoaded y click.*/
document.addEventListener("DOMContentLoaded", function(){
    let Result = document.getElementById("result");

let button = document.getElementById("btn"),
      number1 = 0,
      number2 = 0,
      number3 = 0;

function getData(){
    number1 = parseInt(document.getElementById("number1").value),
    number2 = parseInt(document.getElementById("number2").value),
    number3 = parseInt(document.getElementById("number3").value);

    comparison();
}

function comparison(){
    if(number1 > number2 && number1 > number3){
        Result.innerHTML = "El mayor es : " + number1;
    }else if(number2 > number1 && number2 > number3){
        Result.innerHTML = "El mayor es : " + number2;
    }else if(number3 > number1 && number3 > number2){
        Result.innerHTML = "El mayor es : " + number3;
    }else if(number1 == number2 && number1 == number3 || number2 == number1 && number2 == number1 || number3 == number2 && number3 == number1){
        Result.innerHTML = "Son iguales";
    }
}


button.onclick = getData;
});

