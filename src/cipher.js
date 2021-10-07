let cifrado;
window.cipher = {
  encode:(offset,string) => {  // Una funcion para  empezar a codificar
       let codificar = "";
       for( let i=0; i<string.length; i++) {
         if(string.charCodeAt(i)>97 && string.charCodeAt(i)<=90){
           codificar=codificar + String.fromCharCode((string.charCodeAt(i)+offset-65)%26+65)
         }else{ if(string.charCodeAt(i)>=97 && string.charCodeAt(i)<=122) {
           codificar=codificar +String.fromCharCode((string.charCodeAt(i)+offset-97)%26+97)

         }else{
           codificar=codificar + String.fromCharCode(string.charCodeAt(i))
         }
       }
  }
  console.log(typeof(codificar))
},



    /*
    let codifica = ""; // Almacena las letras remplazadas 
    for (let i=0; i< offset.length ; i++){ //  Esta funcion itera cada letra que se ingresa y recorre de la string a la ultima
      
      let cifrar = string.charCodeAt(i); // se traduce de letras a unicodes
      if (65 <= cifrar && cifrar <= 90) { // Define si es mayuscula 
          codifica += String.fromCharCode(
            ((cifrar - 65 + parseInt(string)%26 + 65) // Funcion parseInt calcula las letras del alfabeto hexadecimal. obtiene el nuevo numero y se transpasa a la letra correpondiente en mayuscula
          )); // Esta formula se utiliza para sacar de la letra A hasta la Z
          console.log("ya pase por aqui")
      } else if (97 <= cifrar && cifrar <= 122) { // Para las minusculas
           codifica += String.fromCharCode(
             ((cifrar -97 + parseInt(string))%26 +97 )//Obtener el nuevo numero en minuscula
           );
      } else {
        codifica += string.charAt(i);
      } // se aplica el caso que no sea letras, se copia el caracter 
    }   
              return codifica; // retorna el nuevo mensaje codificado
            
    }, 

    // decodificar
    decode: (offset,string) => {
      let decodifica = "";
      for (let i=0; i< offset.length ; i++){ //  Esta funcion itera cada letra que se ingresa y recorre de la string a la ultima
        let decifrar = offset.charCodeAt(i); // se traduce de letras a unicodes
        if (65 <= decifrar && decifrar <= 90) { // Define si es mayuscula 
            decodifica += String.fromCharCode(
              ((decifra - 65 - parseInt(string)%26 + 65) // Funcion parseInt calcula las letras del alfabeto hexadecimal. obtiene el nuevo numero y se transpasa a la letra correpondiente en mayuscula
            )); // Esta formula se utiliza para sacar de la letra A hasta la Z
        } else if (97 <= decifrar && decifrar <= 122) { // Para las minusculas
             decodifica += String.fromCharCode(
               ((decifrar -97 - parseInt(string)+52 )%26 +97) //Obtener el nuevo numero en minuscula
             );
        } else {
          decodifica += offset.charAt(i);
        } // se aplica el caso que no sea letras, se copia el caracter 
      }
      return decodifica;
      }   
    };
  */