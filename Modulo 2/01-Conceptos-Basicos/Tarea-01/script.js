/*Ejercicio 1
Realizar un algoritmo en Javascript que permita calcular la suma, resta, multiplicación
y división de dos números, donde num1 = 5 y num2 = 7. Mostrar los resultados por consola.
 */


let num1 = 5, num2 = 7;
let suma=0, resta=0, multiplicacion=0, division=0;

function calcular(){
    suma = num1 + num2;
    console.log(suma);

    resta = num1 - num2;
    console.log(resta);

    multiplicacion = num1 * num2;
    console.log(multiplicacion);

    division = num1 / num2;
    console.log(division.toFixed(2));

}

calcular();