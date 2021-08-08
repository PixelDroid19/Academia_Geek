/*Capturar usuario y contraseña desde cajas de texto y almacenar la 
información en el localstorage en variables separadas.*/

function guardarDatos() {
    localStorage.nombre = document.getElementById("firstName").value;
    localStorage.password = document.getElementById("Password").value;
}

function recuperarDatos() {
    if ((localStorage.nombre != undefined) && (localStorage.password != undefined)) {
        document.getElementById("datos").innerHTML = "Nombre: " + localStorage.nombre + "<br>" + "Password: " + localStorage.password;
    } else {
        document.getElementById("datos").innerHTML = "No has introducido tu nombre y tu password";
    }
}