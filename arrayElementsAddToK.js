/**
  Array elements adding to sum K
  
  AND 
  
  IMPORTANT GOTCHA: I was sending prefixArr and remArr in recursion calls but as they were getting manipulated like push and pop, 
  logic in some other recursion calls was not working as expected like remArr.length was 0 when it shouldn't be. 
  So, copies of arrays should be sent in recursions.

*/



// Find all sets of array elemnts adding to sum. Further below is function just to print all sub sets
function recursionForSum(arr, prefixArr, remArr, sumSoFar, sum) {
  //Break
  if(sumSoFar === sum) {
    arr.push(prefixArr);
    return;
  }
  if (remArr.length === 0 || sumSoFar > sum){
    return;
  }
  
  //Decrease 
  const curEle = remArr.pop();

  recursionForSum(arr, [...prefixArr], [...remArr], sumSoFar, sum);
  recursionForSum(arr, [...prefixArr, curEle], [...remArr], sumSoFar + curEle, sum);

}

let arr = [];

recursionForSum(arr, [], [1, 2, 3, 2], 0, 4);
console.log(arr);





// This is just to print all subsets
function recursion(arr, prefixArr, remArr) {
  //Break
  if (remArr.length === 0) {
    arr.push(prefixArr);
    return;
  }
  
  //Decrease 
  const curEle = remArr.pop();

  //IMPORTANT GOTCHA: Send array copies, otherwise as they are updated, some other recusion call not working as expected because these 2 arrays
  // are changing outside of the current recursion call
  recursion(arr, [...prefixArr], [...remArr]);
  recursion(arr, [...prefixArr, curEle], [...remArr]);
}

arr = [];

recursion(arr, [], [1, 2, 3]);
console.log(arr);










