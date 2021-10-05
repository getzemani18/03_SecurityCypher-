window.cipher = {
  encode:(offset,string) => { 
    for (let i=0; i<(string.length); i++){
      let asciiPosition= string.charCodeAt (i);
      console.log('asciiPosition');
      (x -65 + n) % 26 +65*/
                let enCodexString = (asciiPosition-65 + offset) %26 + 65;
                let result = String.fromCharCode(enCodexString);
              }
              return result;
          }
      };

};
encode();