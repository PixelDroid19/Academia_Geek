let Negative = document.getElementById("Negative"),
    Positive = document.getElementById("Positive");

let numberPositive = [15];
let numberNegative = [-27 , -92 ,
                      -72 , -59 , 
                      -72 , -32 , 
                      -31 , -2 , 
                      -82 , -10 , 
                      -15 , -49 , 
                      -23 , -83 , 
                      -42];


function printData(){
    for(let i = 0; i < 15; i++){
        Negative.innerHTML += numberNegative[i]+ ", ";
    }

    for(let i = 0; i < 15; i++){
        numberPositive[i] = (numberNegative[i] * -1); 
        Positive.innerHTML += numberPositive[i]+ " , ";
    }
}

printData();