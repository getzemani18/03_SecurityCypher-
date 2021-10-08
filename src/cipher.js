window.cipher = { 
      encode: function encode (offset,string){
            let desplazamiento = ""
            for(let i =0;i<string.length;i++){
                  if(string.charCodeAt(i)>=65 && string.charCodeAt(i)<=90){ // 65 al 90 son mayusculas en el código ASCCI
                  let temp = (string.charCodeAt(i)-65+offset) %26+65
                  let temp2 = String.fromCharCode(temp)
                  desplazamiento = desplazamiento+ temp2
                  } else { if(string.charCodeAt(i)>=97 && string.charCodeAt(i)<=122){  //97 al 122 son minusculas
                        let temp = (string.charCodeAt(i)-97+offset) %26+97
                        let temp2 = String.fromCharCode(temp)
                        desplazamiento = desplazamiento+ temp2  
                  }else{
                        desplazamiento=desplazamiento+ " "
                  }
      
                  }
                 
            }
           return desplazamiento
      },
      decode: function decode (offset,string){
            let desplazamiento = ""
            for(let i =0;i<string.length;i++){
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
           return desplazamiento
      },
       //Espero que funcione, que codifique y decodifique 
      
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
            // Itera cada que se ingresa dentro del string y la funcion 
            */