alert("Bienvenido");
// declaramos una variable para ocultar contenido de nuestra applicacion
var contenedorOcultar = document.getElementById("ocultar");//llamamos al id desde js
console.log(contenedorOcultar)//verificamos que funcione en el browser
contenedorOcultar.style.visibility = "hidden"//ocultamos desde JS el div ocultar
// Cuando la persona ingrese la contraseña correcta se desactiva la propiedad hidden
let userPassword = prompt('Ingresa tu contraseña o pseudónimo') //variable de contraseña del user
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

// ----------------aqui empieza funciones del DOM para descifrado---------

// Hacer funcionar los botones 
window.onload = function() { //El evento load dispara el evento al final del proceso de carga del documento. En este punto, todos los objetos del documento son DOM
// Boton cifrar
const botonCifrar = document.getElementById("botonCifrar"); // llamar al boton en HTML
botonCifrar.addEventListener("click", () => {
// Al botón se le adicióna el click y lo que sucede cuando éste evento sucede.
let string = document.getElementById('mensajeuno').value;// se guarda el valor de "offset" en la variable con el cipher.js
let offset = document.getElementById('desplazamientos').value;// se guarda el valor "desplazamientos" en la variable 
console.log(botonCifrar)
window.cipher.encode(offset, string); // se mandan los valores obtenidos a la funcion encode 
document.getElementById('mensajedos').innerHTML = window.cipher.encode(offset,string); // llama  el resultado de la function para ponerlo en el sector dentro del HTML
}); 

// Boton para decifrar
const botonDescifrar = document.getElementById("botonDescifrar"); // llamar al boton html
botonDescifrar.addEventListener("click", () => {
    // Al botón se le adicióna el click y lo que sucede cuando éste evento sucede.
    let string = document.getElementById('mensajeuno').value; // se guarda el valor de "offset" en la variable con el cipher.js
    let offset = document.getElementById('desplazamientos').value; // se guarda el valor "desplazamientos" en la variable
    window.cipher.decode(offset, string); // se mandan los valores obtenidos a la funcion encode 
    document.getElementById('mensajedos').innerHTML = window.cipher.decode(parseInt(offset),string); // llama  el resultado de la function para ponerlo en el sector dentro del HTML
});
}; 




//-----------Funciones para probadas-----//

// ----------------aqui empieza funciones del DOM para cifrado---------
/*
//Traer el boton para activar la funcion de cifrar
let botonDeCifrar = document.getElementById('botonCifrar')
console.log(botonDeCifrar)

// Traer el boton para activar la funcion decifrar
let botonDescifrar = document.getElementById('botonDescifrar')
console.log(botonDescifrar)
*/
/*
//Hacer una funcion que le pase la llave a cypher
let pasameLaLLaveyMensaje = () => {
    //Traer la llave del numero de desplazamientos y mensaje
    let inputDesplazamientos = document.getElementById('desplazamientos').value
    let mostrarMensaje = document.getElementById('mensaje').value
    console.log("ten la llave " + inputDesplazamientos + " y ten tu mensaje " + mostrarMensaje)
    //darle la llave y el mensaje a cypher
    cipher.encode(inputDesplazamientos,mostrarMensaje)
    console.log(cipher.encode(inputDesplazamientos,mostrarMensaje))
    document.getElementById('mensaje').innerHTML= cipher.encode(inputDesplazamientos,mostrarMensaje)
}


//Con add Event listener se agrega la funcion cifrar al dar el click
botonDeCifrar.addEventListener('click', pasameLaLLaveyMensaje)
*/
/*
function cifrar(){
let botonCifrar = document.getElementById("botonCifrar");
let botonDes= document.getElementById("botonDescifrar");
console.log(botonCifrar)
console.log(botonDes)

}

*/


/*
let botonCifrar = document.getElementById('botonCifrar');
botonCifrar.addEventListener("click", function() {
    let offset = document.getElementById('desplazamientos').value;
    let string = document.getElementById('mensajeuno').value;
    console.log(offset)
    window.cipher.encode(offset, string); // se mandan los valores obtenidos a la funcion encode 
document.getElementById('').innerHTML = window.cipher.encode(offset,string);
})
*/