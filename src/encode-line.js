const { NotImplementedError } = require("../extensions/index.js");

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
  const arr = str.split("");
  let result = [];
  let count = 1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      count++;
    } else {
      result.push(count, arr[i]);
      count = 1;
    }
  }
  result = result.filter((element) => element !== 1);
  console.log(result);
  let resStr = result.join("");
  return resStr;
}

module.exports = {
  encodeLine,
};
