/**
 * https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/887/
 * Find longest common prefix for strings:
 * E.g: It's "fl" for ["flower","flow","flight"]
 * It's "" for ["ram", "arm"]
 */

var longestCommonPrefix = function (a) {
  const len = a.length;

  if (len < 2) {
    return a[0];
  }

  const lastEle = a.pop(),
    lastBeforeEle = a.pop();
  if (len === 2) {
    return getCommonPrefix(lastEle, lastBeforeEle);
  }
  return recursion(a, getCommonPrefix(lastEle, lastBeforeEle));
  // console.log(getCommonPrefix(a[0], a[1]));
};

var recursion = function (remArr, prefixSoFar) {
  if (prefixSoFar === "" || remArr.length === 0) {
    return prefixSoFar;
  }

  const curElem = remArr.pop();
  return recursion(remArr, getCommonPrefix(prefixSoFar, curElem));
};

var getCommonPrefix = function (a, b) {
  const [smallerStr, smallerLen] =
    a.length > b.length ? [b, b.length] : [a, a.length];

  for (let i = 0; i < smallerLen; i++) {
    if (a[i] !== b[i]) {
      return a.substring(0, i);
    }
  }
  return smallerStr;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
