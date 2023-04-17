const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
 function getDNSStats( domains ) {
  const arr = {};
  let acc;
  for (let i = 0; i < domains.length; i++) {
    acc = domains[i].split('.').reverse();
    acc[0] = '.'.concat(acc[0]);
    for (let k = 0; k < acc.length; k++) {
      if (acc[k + 1]) {
        acc[k + 1] = acc[k].concat('.', acc[k+ 1]);
      }
      if (Object.prototype.hasOwnProperty.call(arr, (acc[k]))) {
        arr[acc[k]] += 1;
      } else {
        arr[acc[k]] = 1;
      }
    }
  }
  return arr;
}

module.exports = {
  getDNSStats
};
