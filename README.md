# 03_SecurityCypher

---
Índice
 1. Descripcion
 2. User Definition
 3. Diagrama de flujo
 4. UI
 5. Pseudocodigo 
 6. Lenguajes Utilizados
---

## 1. Descrpcion 
Crear una aplicacion para Celular y Computadora, donde los empleados puedan administrar a los clientes del Antro. 

---

## 2. User Definition:
La aplicacion constara de un código que los clientes podran tener para entarar al Antro. Dentro del Antro ya podran cifrar alguna palabra para despues desifrarla y asi se comunicaran entre ellos. 

---


## 3. Diagrama de flujo

![Diagrama de Flujo](./src/assets/diagrama.png)

---

## 4. UI(user interface)

![UI](./src/assets/)

---

## 5. Pseudocodigo

``` JS
Alert "Ingresa tu clave de acceso o Pseudocodigo"
```

``` js
Prompt Confirm
"Clave correcta" --> Alert "Continuar"
if else 
"Clave incorrecta" --> Alert "Acceso Denegado"
```
### Regresa al inicio 

```
Funcion // Codificar caracteres ingresados
```

```
input 1 // Texto decifrable
```
Boton
+ Cifrar
+ Decifrar

```
Input 2 // Mensaje cifrado
```

Boton 
+ Copiar texto

 ## Seccion HTML

 ```
 <textarea id="textArea">We are learning to copy text to clipboard in JavaScript.</textarea>
    <button onclick="copyToClipBoard()">Copy</button>
```

## Seccion JavaScript 

```
function copyToClipBoard() {

    var content = document.getElementById('textArea');
    
    content.select();
    document.execCommand('copy');

    alert("Copied!");
}
```

---

## 6.  Lenguajes Utilizados
+ HTML5
+ CSS
+ JavaScript

---

## 7. Testing

---

## 8. Deployment

---

## 9.  CopyRight

© Copyright 2021-Proyecto#3-SegurityCypher  Getzemani Ramirez & Monica Macal
