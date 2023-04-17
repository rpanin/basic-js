const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
 function minesweeper (matrix) {
  let res = [];
  for (let i=0; i<matrix.length; i++) {
    res[i] = matrix[i].slice();
  }
  for (let i=0; i<res.length;i++) {
    for (let k=0; k<res[i].length; k++) {
      res[i][k] = 0;
      if (matrix[i-1]) {
        if (matrix[i-1][k-1]) {
          res[i][k]++;
        }
        if (matrix[i-1][k]) {
          res[i][k]++;
        }
        if (matrix[i-1][k+1]) {
          res[i][k]++;
        }
      }
      if (matrix[i][k-1]) {
        res[i][k]++;
      }
      if (matrix[i][k+1]) {
        res[i][k]++;
      }
      if (typeof matrix[i+1] !== 'undefined') {
        if (matrix[i+1][k-1]) {
          res[i][k]++;
        }
        if (matrix[i+1][k]) {
          res[i][k]++;
        }
        if (matrix[i + 1][k + 1]) {
          res[i][k]++;
        }
      }
    }
  }
  return res;
}

module.exports = {
  minesweeper
};
