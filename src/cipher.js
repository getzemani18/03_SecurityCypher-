window.cipher = { //El elemento window hace posible que la funcion se aplique a todos los elementos en el browseren
          encode: function encode (offset,string){  //funcion para codificar el numero de desplazamientos y el texto
            let desplazamiento = "" //string vacío en el cual el user introducira el mensaje
            for(let i =0;i<string.length;i++){  // Con el for iteramo cada letra que ingresa al string
                  if(string.charCodeAt(i)>=65 && string.charCodeAt(i)<=90){ // asignamos los valore del 65 al 90 porque son las mayusculas en el código ASCCI
                  let temp = (string.charCodeAt(i)-65+offset) %26+65  //declaramos una variable para guardar la formula y convertir cada letra al codigo ASCCI con charCodeAt
                  let temp2 = String.fromCharCode(temp) //asignamos una variable para realizar el proceso contrario y convertir un numero ASCCI a letra con la propiedad fromCharCode
                  desplazamiento = desplazamiento+ temp2  // Con esta igualdad se establece que al numero de desplazamientos que se ingresan se le aplique la formula anterior
                  } else { if(string.charCodeAt(i)>=97 && string.charCodeAt(i)<=122){  // Si no sucede lo anterior se aplica esta funcion ya que del 97 al 122 son letras  minusculas en el código ASCII
                        let temp = (string.charCodeAt(i)-97+offset) %26+97
                        let temp2 = String.fromCharCode(temp)
                        desplazamiento = desplazamiento+ temp2  
                  }else{
                        desplazamiento=desplazamiento+ " " // las comillas significan un espacio
                  }
      
                  }
                 
            }
           return desplazamiento
      },
      decode: function decode (offset,string){ //funcion para decodificar 
            let desplazamiento = ""            //se ingresa el numero de desplazamientos
            for(let i =0; i<string.length; i++){  // Itera cada que se ingresa dentro del string y la funcion 
                  if(string.charCodeAt(i)>=65 && string.charCodeAt(i)<=90){ // 65 al 90 son mayusculas en el código ASCCI
                  let temp = (string.charCodeAt(i)-65-offset+26) %26+65
                  let temp2 = String.fromCharCode(temp)
                  desplazamiento = desplazamiento+ temp2
                  } else { if(string.charCodeAt(i)>=97 && string.charCodeAt(i)<=122){  //97 al 122 son minusculas
                        let temp = (string.charCodeAt(i)-97-offset+26) %26+97
                        let temp2 = String.fromCharCode(temp)
                        desplazamiento = desplazamiento+ temp2  
                  }else{
                        desplazamiento=desplazamiento+ " "
                  }
      
                  }
                 
            }
           return desplazamiento //retorna al proceso
      },
       
      
}


/*


let cifrar= ""; //Nos traemos el id del index.html y index.js...
           let number= ""; //numero
           for(let i=0; i< string.length; i++) {

            if(string[i].charCodeAt() >= 65 && string[i].charCodeAt() <= 90){

                  let mayusculas= (string[i].charCodeAt()-65+string)%26+65;
                  let number= String.fromCharCode(mayusculas)
                  number= (string[i]);
                  cifrar += number;
                  console.log("mayusculas")// Es para sacar las letras mayusculas(Código ASCII
            } else if (cifrar[i].charCodeAt()>=97 && cifrar [i].charCodeAt()<=122)
            //
            */