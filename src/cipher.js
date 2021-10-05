let cifrado;
window.cipher = {
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