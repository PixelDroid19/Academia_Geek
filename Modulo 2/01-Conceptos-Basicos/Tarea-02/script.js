/*Hacer un algoritmo que calcule el sueldo de un empleado dados como datos de entrada:
el nombre, horas trabajadas y el valor de la hora.*/
let button = document.getElementById("btn");
let HoursWorked = 0, HoursValue = 0, TotalPay = 0;
let Name = "";


button.onclick = function(){
    getData();
    calcule();
    printData();
}

function getData(){
    HoursWorked = document.getElementById("HoursWorked").value;
    HoursValue = document.getElementById("HoursValue").value;
    Name = document.getElementById("Name").value;
}

function calcule(){
    TotalPay = HoursWorked * HoursValue;
}

function printData(){
    document.getElementById("TotalPay").value = "";
    document.getElementById("TotalPay").value = TotalPay;
}