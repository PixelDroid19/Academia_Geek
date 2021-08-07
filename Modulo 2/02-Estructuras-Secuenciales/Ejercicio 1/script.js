/*Un maestro desea saber que porcentaje de hombres 
y que procentajes de mujeres hay en un grupo de estudiantes.*/

let numberStudents = document.getElementById("numberStudents"),
    amountWomen    = document.getElementById("amountWomen"),
    quantityMen    = document.getElementById("quantityMen"),
    Get = document.getElementById("getData"),
    PrintMen = document.getElementById("men"),
    PrintWoman = document.getElementById("women");

let Men = 0,
    Women = 0,
    Students = 0, 
    PercentageMen = 0,
    totalStudents = 0,
    PercentageWomen = 0;

function getData(){
    Students = numberStudents.value; 
    Women    = amountWomen.value;
    Men      = quantityMen.value;
    calc();
}

function calc(){
    PercentageMen = (Men/Students) * 100;
    PercentageWomen = (Women/Students) * 100;
    Print();
}

function Print(){
    PrintMen.innerHTML   = "Porcentaje de Hombres: " + PercentageMen.toFixed(0) + "%";
    PrintWoman.innerHTML = "Porcentaje de Mujeres: " +PercentageWomen.toFixed(0)+ "%";
}

Get.onclick = getData;