
/**
 * Given a string, produce all combinations with lower and upper case characters
 * E.g: Input: 'a1B2' will have: a1b2, A1b2, a1B2, A1B2
 */

const result = [];
const strCombinations = (str) => {
  recursion(str, 0, "");
};

const recursion = (str, i, resStr) => {
  //Break
  if (i === str.length) {
    result.push(resStr);
    return;
  }

  //Smaller problem
  let curItemAscii = str.charCodeAt(i);
  if (isAlphabet(curItemAscii)) {
    recursion(str, i + 1, resStr + str[i].toLowerCase());
    recursion(str, i + 1, resStr + str[i].toUpperCase());
  } else {
    recursion(str, i + 1, resStr + str[i]);
  }
};

const isAlphabet = (ascii) => {
  if ((ascii > 64 && ascii < 91) || (ascii > 96 && ascii < 123)) {
    return true;
  }
};

strCombinations("a1B2");
console.log(result);
