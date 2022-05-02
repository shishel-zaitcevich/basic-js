const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let arr = [];
  if (members === null || members === undefined) {
    return false;
  }
  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] === "string") {
      arr.push(members[i].trim().charAt(0));
      console.log(arr);
    }
  }
  let str = arr.join();
  str = str.toUpperCase(); //вырезала пробелы
  str = str.replace(/[^a-zа-яё]/gi, ""); //убрала запятые
  str = str.split("").sort().join("");
  return str;
}
//пройти по массиву
// если элемент является стрингой - сделать каждую 1ю букву заглавной  /// current.trim()
//затем вырезать каждую первую букву и добавить ее к массиву let teamName += currentName.charAt(0).toUpperCase();
//отсортировать этот массив и сделать стрингой, убрав запятые

module.exports = {
  createDreamTeam,
};
