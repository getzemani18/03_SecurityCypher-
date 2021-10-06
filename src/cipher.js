let cifrado;
window.cipher = {
  encode:(offset,string) => {  // Una funcion para  empezar a codificar
    for (let i=0; i< string.length ; i++){ //  Esta funcion itera cada letra que se ingresa 
      let asciiPosition= string.charCodeAt (i); // la i es la posicion del numero que signas para ponerlo en el numero del abecedario
      console.log('asciiPosition');
      (x -65 + n) % 26 +65  // formula para converti y buscarlos en en albecedario. x el valor de la letra, n es el valor de desplazamiento, funcion para codificar
                let enCodexString = (asciiPosition-65 + offset) %26 + 65; // utilizamos la funcion para la variable, sustituyendo
                let result = String.fromCharCode(enCodexString); //regrese a una cadena mediante una secuancia de letras 
              }
              return result;
          },

           decode:(offset,string) => { // Una funcion para  empezar a decodificar
            for (let i=0; i< string.length ; i++){   //  Esta funcion itera cada letra que se ingresa
              let asciiPosition= string.charCodeAt (i);   // la i es la posicion del numero que signas para ponerlo en el numero del abecedario
              console.log('asciiPosition');
              (x -65 - n + 26) % 26 +65    // formula para converti y buscarlos en en albecedario. x el valor de la letra, n es el valor de desplazamiento, funcion para decodificar
                        let enCodexString = (asciiPosition-65 - offset + 26) %26 + 65;  // utilizamos la funcion para la variable, sustituyendo
                        let result = String.fromCharCode(enCodexString);  //regrese a una cadena mediante una secuancia de letras 
                      }
                      return result;
                  }
      };
encode();
