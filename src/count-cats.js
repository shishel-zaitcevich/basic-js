const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */

function countCats(matrix) {
  // throw new NotImplementedError("Not implemented");
  let count = 0;
  let cat = "^^";
  let arr = [];

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      // либо ошибка на длину массива
      if (matrix[i][j] === cat) {
        count += 1;
      }
    }
  }
  return count;
}

module.exports = {
  countCats,
};
