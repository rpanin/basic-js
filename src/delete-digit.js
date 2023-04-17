const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 **/
 function deleteDigit(n) {
  let res = 0;
  let num = String(n).split('');
  for (let i = 0; i < num.length; i++) {
    num.splice(i, 1);
    if (Number(num.join('')) > res) {
      res = Number(num.join(''));
    }
    num = String(n).split('');
  }
  return res;
}

module.exports = {
  deleteDigit
};
