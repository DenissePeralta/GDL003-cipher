window.cipher = {
  // ... let ascii = textValue[i].toUpperCase().charCodeAt();
  /*  } else if ((ascii + 97 - offset) % 26 === 0) {
      let caesarOp = ascii - ((ascii + 97 - offset)/26);
      decodePhrase += String.fromCharCode(caesarOp);*/
  encode: (textValue,offset) => {
    let encodePhrase = "";
    for (let i = 0; i < textValue.length; i++) {
      let ascii = textValue[i].charCodeAt();
      if (ascii >= 65 && ascii <= 90) {
        let caesarOp = (ascii - 65 + offset) % 26  + 65;
        encodePhrase += String.fromCharCode(caesarOp);
      } else if (ascii >= 97 && ascii <= 122) {
        let caesarOp = (ascii - 97 + offset) % 26 + 97;
        encodePhrase += String.fromCharCode(caesarOp);
      } else {
        encodePhrase += String.fromCharCode(ascii);
      }
    }
    return encodePhrase;
  },

  decode: (textValue,offset) => {
    let decodePhrase = "";
    for (let i = 0; i < textValue.length; i++) {
      let ascii = textValue[i].charCodeAt();
      if (ascii >= 65 && ascii <= 90) {
        let caesarOp = (ascii + 65 - offset) % 26 + 65;
        decodePhrase += String.fromCharCode(caesarOp);
      } else if (ascii >= 97 && ascii <= 122) {
        let caesarOp = (ascii + 97 - offset) % 26 + 97;
        decodePhrase += String.fromCharCode(caesarOp);
      } else {
        decodePhrase += String.fromCharCode(ascii);
      }
    }
    return decodePhrase;
  }
};
