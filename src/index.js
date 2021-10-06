alert("Bienvenido");



let contraseña = prompt('Ingrsa tu contraseña o pseudocodigo')
if (contraseña == 3) {
alert('contraseña correcta')
} else {
alert('Incorrecto')
}
document.getElementById("respuestacorrecta").innerHTML = contraseña;