let cifrado;
window.cipher = {
<<<<<<< HEAD
  encode:(offset,string) => { 
    for (let i=0; i< string.length ; i++){
      let asciiPosition= string.charCodeAt (i);
      console.log('asciiPosition');
      (x -65 + n) % 26 +65 
                let enCodexString = (asciiPosition-65 + offset) %26 + 65;
                let result = String.fromCharCode(enCodexString);
              }
              return result;
          }
      };
encode();
=======
  encode: function (offset,str){
    console.log('aqui va la funcion encoding')

    cifrado = offset + str 
    return(typeof(cifrado))
    
  },
  decode: function(){
    console.log("aqui va el codigo de la funcion de la decode")
  }
};
console.log(cipher.encode(3,"hola"))
>>>>>>> d8d5f5b0d5030ec75bee1550fd8ac487f4181ab3
