alert("Bienvenido");
// declaramos una variable para ocultar contenido de nuestra applicacion
var contenedorOcultar = document.getElementById("ocultar");//llamamos al id desde js
console.log(contenedorOcultar)//verificamos que funcione en el browser
contenedorOcultar.style.visibility = "hidden"//ocultamos desde JS el div ocultar

// Cuando la persona ingrese la contraseña correcta se desactiva la propiedad hidden
let userPassword = prompt('Ingresa tu contraseña o pseudocodigo') //variable de contraseña del user
console.log(userPassword)
// declarar la contraseña que el User debe ingresar
let correctPassword = "123"
// si el user ingresa la contraseña correcta puede acceder a la pagina
if (userPassword === correctPassword){
    alert('password correcto')
    //si el password es correcto omitir el estilo hidden 
contenedorOcultar.style.visibility = ""
}else {
    //alert que diga que la contraseña es incorrecta y colocar sonido "error"
alert('password incorrecto')
}












<<<<<<< HEAD


=======
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
>>>>>>> 514fd106b121723828ed3ed44c1fc2554b834d6b
