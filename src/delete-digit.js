const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let result = 0;
  const num_digits = [];
  while (n) {
    num_digits.push(n % 10);
    n = Math.floor(n / 10);
  }
  for (let index_num = 0; index_num < num_digits.length; index_num++) {
    let num = 0;
    for (let i = num_digits.length - 1; i >= 0; i--) {
      if (i !== index_num) {
        num = num * 10 + num_digits[i];
      }
    }
    result = Math.max(num, result);
  }
  return result;
}

module.exports = {
  deleteDigit,
};
