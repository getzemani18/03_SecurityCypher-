alert("Bienvenido al Cifrado Cesar"); //alert de bienvenida



// prompt para la contraseña de ingreso a la web
let contraseña = prompt('Ingresa tu contraseña o pseudocodigo') 
if (contraseña == 3) {
alert('contraseña correcta')
} else {
alert('Incorrecto')
}
document.getElementById("respuestacorrecta").innerHTML = contraseña;



// Hacer funcionar los botones 
window.onload = function() { //El evento load dispara el evento al final del proceso de carga del documento. En este punto, todos los objetos del documento son DOM
// Boton cifrar
const cifrar = document.getElementById("cifrar"); // lamar al boton en HTML
cifrar.addEventListener("click", () => {
// Al botón se le adicióna el click y lo que sucede cuando éste evento sucede.
let offset = document.getElementById('mensaje').value // se guarda el valor de "offset" en la variable con el cipher.js
let string = document.getElementById('desplazamientos').value // se guarda el valor "desplazamientos" en la variable 
cipher.encode(offset, string); // se mandan los valores obtenidos a la funcion encode 
document.getElementById('mensaje1').innerHTML = cipher.encode(offset,string); // llama  el resultado de la function para ponerlo en el sector dentro del HTML
}); 

// Boton para decifrar
const decifrar = document.getElementById("decifrar"); // llamar al boton html
cifrar.addEventListener("click", () => {
    // Al botón se le adicióna el click y lo que sucede cuando éste evento sucede.
    let offset = document.getElementById(mensaje).value // se guarda el valor de "offset" en la variable con el cipher.js
    let string = document.getElementById(desplazamientos).value  // se guarda el valor "desplazamientos" en la variable
    window.cipher.decode(offset, string); // se mandan los valores obtenidos a la funcion encode 
    document.getElementById(mensaje1).innerHTML = window.cipher.decode(offset,string); // llama  el resultado de la function para ponerlo en el sector dentro del HTML
});
};