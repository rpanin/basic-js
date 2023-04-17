const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
 class VigenereCipheringMachine {
  constructor(encode = true){
    this.encode = encode;
  }
  encrypt(message, key) {
    let str= '';
    if (!message || !key) throw new Error("Incorrect arguments!");
    message = message.toUpperCase();
    key = key.toUpperCase();
    if (key.length > message.length){
      str = key.slice(0, message.length);
    } else {
      let repeat = Math.floor(message.length/key.length);
      for (let i = 0; i < repeat + 1; i++) {
        str += key;
      }
      str = str.slice(0, message.length);
    }
    let keyStringArr = str.split('');
    let arr = [];
    for (let i = 0; i < message.length; i++) {
      if (message.charCodeAt(i) >= 65 && message.charCodeAt(i) <= 90){
        arr.push(keyStringArr.shift());
      } else {
        arr.push("n");
      }
    }
    str = arr.join('');
    let str1 = [];
    for (let i = 0; i < str.length; i++) {
      str1.push(str.charCodeAt(i) - 65);
    }
    console.log(str1);

    let encryptedString = [];
    for (let i = 0; i < message.length; i++) {
      if (message.charCodeAt(i) >= 65 && message.charCodeAt(i) <= 90){
        let code = message.charCodeAt(i) + str1[i];
         if (code > 90) code = code - 26;
         encryptedString.push(String.fromCharCode(code));
      } else {
        encryptedString.push(message[i]);
      }
    }

    return this.encode ? encryptedString.join(''):encryptedString.reverse().join('');  
  }
  decrypt(message, key) {
    if (!message|| !key) {
      throw new Error("Incorrect arguments!");
    }

      message = message.toUpperCase();
      key = key.toUpperCase();
      let str = '';
      if (key.length > message.length){
         str = key.slice(0, message.length);
      } else {
        let repeat = Math.floor(message.length/key.length);
        for (let i = 0; i < repeat + 1; i++) {
          str += key;
        }
        str = str.slice(0, message.length);
      }
      let keyStringArr = str.split('');
      let arr = [];
      for (let i = 0; i < message.length; i++) {
        if (message.charCodeAt(i) >= 65 && message.charCodeAt(i) <= 90){
          arr.push(keyStringArr.shift());
        } else {
          arr.push("n");
        }
      }
      str = arr.join('');
      let str1 = [];
      for (let i = 0; i < str.length; i++) {
        str1.push(str.charCodeAt(i) - 65);
      }
      let decryptedString = [];
      for (let i = 0; i < message.length; i++) {
        if (message.charCodeAt(i) >= 65 && message.charCodeAt(i) <= 90){
          let code = message.charCodeAt(i) - str1[i];
           if (code < 65) code = code + 26;
           decryptedString.push(String.fromCharCode(code));
        } else {
          decryptedString.push(message[i]);
        }
      }
      return this.encode ? decryptedString.join('') : decryptedString.reverse().join('');

  }
}
module.exports = {
  VigenereCipheringMachine
}
