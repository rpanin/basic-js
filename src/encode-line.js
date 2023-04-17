const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
 function encodeLine(str) {
  let a = 1;
  let res = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i]==str[i+1]) {
      a++;
    }
    else {
      if (a==1) {res+=str[i];}
      else{res += a + str[i];}
      a = 1;
    }
  }
  return res;
}

module.exports = {
  encodeLine
};
