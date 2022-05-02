const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(isStraight = true) {
    this.straight = isStraight;
  }

  makeUpperCase(char) {
    let c = char.charCodeAt();
    if (c >= 65 && c <= 90) {
      return true;
    } else {
      return false;
    }
  }

  makeLowerCase(char) {
    let c = char.charCodeAt();
    if (c >= 97 && c <= 122) {
      return true;
    } else {
      return false;
    }
  }

  chipherKey = {
    a: "abcdefghijklmnopqrstuvwxyz",
    b: "bcdefghijklmnopqrstuvwxyza",
    c: "cdefghijklmnopqrstuvwxyzab",
    d: "defghijklmnopqrstuvwxyzabc",
    e: "efghijklmnopqrstuvwxyzabcd",
    f: "fghijklmnopqrstuvwxyzabcde",
    g: "ghijklmnopqrstuvwxyzabcdef",
    h: "hijklmnopqrstuvwxyzabcdefg",
    i: "ijklmnopqrstuvwxyzabcdefgh",
    j: "jklmnopqrstuvwxyzabcdefghi",
    k: "klmnopqrstuvwxyzabcdefghij",
    l: "lmnopqrstuvwxyzabcdefghijk",
    m: "mnopqrstuvwxyzabcdefghijkl",
    n: "nopqrstuvwxyzabcdefghijklm",
    o: "opqrstuvwxyzabcdefghijklmn",
    p: "pqrstuvwxyzabcdefghijklmno",
    q: "qrstuvwxyzabcdefghijklmnop",
    r: "rstuvwxyzabcdefghijklmnopq",
    s: "stuvwxyzabcdefghijklmnopqr",
    t: "tuvwxyzabcdefghijklmnopqrs",
    u: "uvwxyzabcdefghijklmnopqrst",
    v: "vwxyzabcdefghijklmnopqrstu",
    w: "wxyzabcdefghijklmnopqrstuv",
    x: "xyzabcdefghijklmnopqrstuvw",
    y: "yzabcdefghijklmnopqrstuvwx",
    z: "zabcdefghijklmnopqrstuvwxy",
  };

  encrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error("Incorrect arguments!");
    }
    let cypher = "";
    for (let i = 0, j = 0; i < message.length; i++) {
      let currentMessage = message[i];

      if (this.makeUpperCase(currentMessage)) {
        let upperMessage =
          (currentMessage.charCodeAt() -
            65 +
            (key[j % key.length].toUpperCase().charCodeAt() - 65)) %
          26;
        cypher += String.fromCharCode(upperMessage + 65);
        j++;
      } else if (this.makeLowerCase(currentMessage)) {
        let lowerMessage =
          (currentMessage.charCodeAt() -
            97 +
            (key[j % key.length].toLowerCase().charCodeAt() - 97)) %
          26;
        cypher += String.fromCharCode(lowerMessage + 97);
        j++;
      } else {
        cypher += currentMessage;
      }
    }
    if (!this.straight) {
      cypher = cypher.split("").reverse().join("");
    }
    return cypher.toUpperCase();
  }

  decrypt(encryptedText, keyword) {
    if (encryptedText === undefined || keyword === undefined) {
      throw new Error("Incorrect arguments!");
    }
    encryptedText = encryptedText.toLowerCase();
    keyword = keyword.match(/[a-z]/gi).join("").toLowerCase();
    let decryptedText = "";
    let characterCount = 0;

    for (let i = 0; i < encryptedText.length; i++) {
      let keyMessage = (i - characterCount) % keyword.length;
      let keyRow = this.chipherKey[keyword[keyMessage]];

      if (keyRow.indexOf(encryptedText[i]) !== -1) {
        decryptedText += this.chipherKey.a[keyRow.indexOf(encryptedText[i])];
      } else {
        decryptedText += encryptedText[i];
        characterCount++;
      }
    }
    if (!this.straight) {
      decryptedText = decryptedText.split("").reverse().join("");
    }
    return decryptedText.toUpperCase();
  }
}

module.exports = {
  VigenereCipheringMachine,
};
