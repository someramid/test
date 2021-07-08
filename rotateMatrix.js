/**
 * https://leetcode.com/problems/rotate-image/solution/
 *
 * Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
 * Output: [[7,4,1],[8,5,2],[9,6,3]]
 */

/**
 * [
 *   [1 2 3]
 *   [4 5 6]
 *   [7 8 9]
 * ]
 */
const rotateMatrix = (a) => {
  const len = a.length;
  let i, j, temp;

  //Transform matrix: rows to columns
  for (i = 0; i < len; i++) {
    for (j = i; j < len; j++) {
      temp = a[i][j];
      a[i][j] = a[j][i];
      a[j][i] = temp;
    }
  }

  //Reverse each row
  for (i=0; i<len; i++) {
    for (j=0; j<len/2; j++) {
      temp = a[i][j];
      a[i][j] = a[i][len-1 - j];
      a[i][len-1 - j] = temp;
    }
  }

  console.log(a);
};

rotateMatrix([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]);
/**
 * Logic: https://leetcode.com/problems/rotate-image/solution/
 * 1. Transform i.e. row will become columns
 * 2. Then, reverse each row array
 */
