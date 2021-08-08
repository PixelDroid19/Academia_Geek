/*Ejercicio 2
Tomar el ejercicio de la Tarea-01 adicionar elementos a la última posición con push, 
eliminar elementos de una posición que se le indique con splice.*/
let Vector = [1, 2, 3, 4, 5], recorrerVector;

let addButton = document.getElementById("addButton"),
    cleanButton = document.getElementById("cleanButton"),
    AddElement = document.getElementById("Add"),
    cleanElement = document.getElementById("Clean");

let number = 0;

 function Add(){
     number = AddElement.value;
     Vector.push(parseFloat(number)); 
     console.clear();
     Print();
 }

 function Clean(){
     Vector.splice(cleanElement.value, 1, ); 
     console.clear();
     Print();
 }

function Print(){
    recorrerVector = Vector.map(function(valor){
    console.log(valor);
});
}

 

addButton.onclick = Add;
cleanButton.onclick = Clean;