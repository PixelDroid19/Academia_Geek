printNumber = document.getElementById("printNumber"),
printPositive = document.getElementById("positive"),
printNegative = document.getElementById("negative"),
printNeutral = document.getElementById("neutral")
Button = document.getElementById("btn");

let randomNumber = [15],
    Positive = 0,
    Negative = 0,
    Neutral = 0;

function Generatenumber(){
    for(let i = 0; i < 15; i++){
        randomNumber[i] = (Math.round(Math.random()*190) - 99).toFixed(0);
    }
    calc();
}

function calc(){
    for(let i = 0; i < 15; i++){
        if(randomNumber[i] > 0){
            Positive++;
        }else if(randomNumber[i] <= -1){
            Negative++;
        }else{
            Neutral++;
        }
    }
    printData();
}

function printData(){
    for(let i = 0; i < 15; i++){
       printNumber.innerHTML += randomNumber[i] + " , "; 
    }

    printPositive.innerHTML = "Positivos: " + Positive;
    printNegative.innerHTML = "Negativos: " + Negative;
    printNeutral.innerHTML = "Neutrales: " + Neutral;
}

Generatenumber();
    