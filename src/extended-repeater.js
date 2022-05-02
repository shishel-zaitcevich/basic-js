const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const {
    repeatTimes = 1,
    separator = "+",
    addition = "",
    additionRepeatTimes = 1,
    additionSeparator = "|",
  } = options;
  let res = "";
  for (let i = 0; i < repeatTimes; i++) {
    res += `${str}`;
    for (let j = 0; j < additionRepeatTimes; j++) {
      res += `${addition}`;
      if (j !== additionRepeatTimes - 1) {
        res += `${additionSeparator}`;
      }
    }
    if (i !== repeatTimes - 1) {
      res += `${separator}`;
    }
  }
  // if (options.addition) {
  //   res += `${addition}`;
  // }
  return res;
}

module.exports = {
  repeater,
};

// str — повторяющаяся строка; options — это объект опций, который содержит свойства:
// RepeatTimes устанавливает количество повторений строки str;
// separator — строка, разделяющая повторения строки str;
// add — дополнительная строка, которая будет добавляться при каждом повторении строки str;
// addRepeatTimes устанавливает количество повторений добавления;
// addSeparator — это строка, разделяющая повторения сложения.
//  Параметры str и add по умолчанию являются строками.
// В случае, когда тип этих параметров разный, их необходимо преобразовать в строку.
//  параметры separator и addSeparator являются строками.
// RepeatTimes и addRepeatTimes — целые числа (при отсутствии любого из них соответствующая строка не повторяется).
// Единственный обязательный параметр — это str, остальные можно не задавать.
// значение разделителя по умолчанию — «+». Значение по умолчанию для addSeparator — '|'.
