/**
 * Given an array find all numbers adding to k
 */

/**
 * This is a tree. Each node is a array element.
 *   Two paths forward for each node: include the element
 *   in final sum or exclude and repeat for remaining
 *   array elements
 *
 *   So, do recursion where each iteration has 2 subproblems
 *     1 with element included and other excluded
 */

const findElementsAddingToK = (arr, k) => {
  recursion(arr, k, [], 0);
};

const recursion = (remArr, k, elementsSoFar, sumSoFar) => {
  //Break
  if (sumSoFar === k) {
    result.push(elementsSoFar);
    return;
  }

  if (sumSoFar > k || remArr.length === 0) {
    return;
  }

  // Cur iteration
  let curItem = remArr.pop();

  //Sub problem including curItem and excluding
  //Note: copy of remArr is needed. Sending remArr itself
  //  won't work.

  //Include curItem
  recursion([...remArr], k, [curItem, ...elementsSoFar], curItem + sumSoFar);

  //Exclude curItem
  recursion([...remArr], k, [...elementsSoFar], sumSoFar);
};

let result = [];
findElementsAddingToK([1, 2, 3], 3);
console.log(result);

result = [];
findElementsAddingToK([0, 5, 6], 3);
console.log(result);
