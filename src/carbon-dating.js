const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
 function dateSample(x) {
  if (Number(x)!=NaN&&typeof(x)=="string"&&x.indexOf("-")<0&&Number(x)<=15&&Number(x)>0){
    return Math.ceil(Math.log(MODERN_ACTIVITY/x)*HALF_LIFE_PERIOD/0.693);
  }
  else return false;
 }

module.exports = {
  dateSample
};
