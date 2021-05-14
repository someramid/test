/**
  Quick sort
  Pivot (p) to split array into 2 halves:
  
  p = Math.floor(n/2)
  Left is i  0 to p-1 and right is i = p+1 to n-1
  So, Left for(i=0; i<p; i++) and  Right for(i=p; i<n; i++)
  
  [] return, n = 0
  [0] return, n = 1
  [0 1] p = 1. for(i=0; i<1) and for(i=1; i<2; i++) --> Both are len = 1
  [0 1 2] p=1 for(i=0;i<1) and for(i=1;i<3) --> L is 1 and R is 2 elems
  [0 1 2 3] p=2 for(i=0;i<2) and for(i=2;i<4) So, [0 1] and [2 3] 
  [0 1 2 3 4] p=2 for(i=0;i<2) and for(i=2;i<5) [0 1] and [2 3 4]
  
*/

var counter = 0;
function quickSort(a) {
  const n = a.length;
    if(n===0 || n===1) {
      return a;
    }
  
  const sortedArray = split(a);
  console.log(sortedArray);
  return sortedArray;
}

// Won't work if elements repeat like [2 3 3 3 1 5 4]
function split(a) {
  counter++;
  
  if(counter>10) {
    return a;
  }

  const n = a.length, p = parseInt(n/2), curVal = a[p];
  if(n===0 || n===1) {
    return a;
  }
  console.log("a=" + a + "curVal=" + curVal);

  let left = [], right = [];
  
  for (let i=0; i<n; i++) {
    if (a[i] < curVal) {
      left.push(a[i]);
    } else if (a[i] > curVal) {
      right.push(a[i]);
    }
  }
  console.log("left=", left);
  console.log("right=", right);

  return [...left, curVal, ...right];
}

// quickSort([2, 3, 3, 3, 1, 5, 4]);


// [2 3 7 8 6 5 4 9]
function quickSortInPlace(a){
  //GOTCHA: I had counter as let initially outside function which doesn't work
  counter = 0;
  const n = a.length, p = parseInt(n/2);
  
  if (n <= 1) {
    return;
  }

//   quickSortHelper(a, 0, p-1);
// GOTCHA: In place update of array ... so no need of concating array pieces, orignal array will be sorted
  quickSortHelper(a, 0, n-1);
  console.log(a);
}

// [2, 3, 7, 8, 6, 5, 4, 9]
function quickSortHelper(a, start, end){
  //GOTCH: I by mistake had start <= end initially
  if(start >= end) {
    return;
  }
  const p = parseInt(start+end/2);
  
  [a[start], a[p]] = [a[p], a[start]];
  let smallPtr = start+1, bigPtr = start+1;
  
  for (bigPtr=start+1; bigPtr<=end; bigPtr++) {
    if (a[bigPtr] < a[start]) {
      //GOTCHA: I had smallPtr++ before swap
      [a[bigPtr], a[smallPtr]] = [a[smallPtr], a[bigPtr]];
      smallPtr++;
    }
  }
      console.log("start=" + start + ", end=" + end + ", smallPtr=" + smallPtr + ", bigPtr=" + bigPtr);
  smallPtr--;
  [a[start], a[smallPtr]] = [a[smallPtr], a[start]];
  

//   console.log(a);
  //GOTCHA: I was splitting arrays at pivot and not smallPtr
  quickSortHelper(a, start, smallPtr-1);
  quickSortHelper(a, smallPtr+1, end);  
  
  //GOTCHA: I was trying to return concatenated arrays
  return;
}

quickSortInPlace([2, 3, 7, 8, 6, 5, 4, 9]);




