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














