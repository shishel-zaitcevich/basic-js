const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  } else if (arr.length === 0) {
    return arr;
  }
  let array = arr.slice();
  for (let i = 0; i < array.length; i++) {
    // console.log(array);
    // console.log("i", i);
    // console.log("arr_i", array[i]);
    if (array[i] === "--discard-next") {
      array.splice(i, 2, "", ""); //пустая строка, чтобы не терялся порядок элементов в массиве
    } else if (array[i] === "--discard-prev") {
      if (i === 0) {
        array.splice(0, 1, "");
      } else {
        array.splice(i - 1, 2, "", "");
      }
    } else if (array[i] === "--double-next") {
      if (i < array.length - 1) {
        array.splice(i, 1, arr[i + 1]);
      } else {
        array.splice(i, 1, "");
      }
    } else if (array[i] === "--double-prev") {
      if (i === 0) {
        array.splice(0, 1, "");
      } else {
        array.splice(i, 1, array[i - 1]);
      }
    }
  }

  return array.filter(function (el) {
    return el !== "";
  });
}

// let transform = array => array.flatMap((v, i, a) => {
//   if (a[i + 1] === '--discard-prev') return [];
//   if (a[i - 1] === '--double-next') return [v, v];
//   if (a[i + 1] === '--double-prev') return [v, v];

//   if (v.toString().startsWith('--d')) return [];

//   return v;
// });

module.exports = {
  transform,
};
