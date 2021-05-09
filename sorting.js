/**
  Quick selection sort
*/


function selSort(arr) {
  let i, j, len = arr.length, curMin;
  for (i=0; i<len; i++) {
    for (j=i; j<len; j++) {
      if (arr[j] < arr[i]) {
        [arr[i], arr[j]] = [arr[j], arr[i]]; //swap
      }
    }
  }
  console.log("Selection sort=" + arr);
}


function bubbleSort(arr) {
  let i, j;
  const len = arr.length;
  for (i=0; i<len; i++) {
    for (j=i; j<len-1; j++) {
      if (arr[j] > arr[j+1]) {
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
      }
    }
  }
  console.log("Bubble sort=" + arr);
}

function bubbleSortBetter(arr) {
  let i, j, swapped;
  const len = arr.length;
  for (i=0; i<len; i++) {
    swapped = false;
    for (j=i; j<len-1; j++) {
      if (arr[j] > arr[j+1]) {
        swapped = true;
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
      }
    }
    // For nearly sorted array, below check will reduce outer loops
    if (!swapped) {
      console.log("No swap happened. Existing after " + (i+1) + " iterations. Arr=" + arr)
      break;
    }
  }
  console.log("Better Bubble sort=" + arr);
}



function insertionSortFromLeftNotWorking(arr) {
  let i, j, curElem;
  const n = arr.length;
  
  //In ith iteration, find right place for ith element by finding 
  //element bigger than arr[i] and placing it before it.
  // At end of ith iteration, elements arr[n-1] to arr[n-1-i] are sorted
  for (i=0; i<n; i++) {
    curElem = arr[i];
    console.log("i=" + i + ", curElem=" + curElem);
    j=i+1;
    while (j<n && arr[j]<curElem) {
      arr[j-1] = arr[j];
      console.log("j=" + j + ", arr=" + arr);  
      j++;
    }
    arr[j-1] = curElem;
    console.log("arr=" + arr);
  }
  console.log("Insertion sort=" + arr);  
}

// [2, 1, 5, 4, 3]

// i=1, cur = 1
//   j=0 to 0
//     a[0] > 1 .. yes ... make a[j+1] = a[j] ==> 1 becomes 2
//     2 2 5 4 3
    
// i=1

function insertionSort(arr) { //https://media.geeksforgeeks.org/wp-content/uploads/insertionsort.png
  let i, j, curElem;
  const n = arr.length;
  
  //In ith iteration, find right place for ith element by finding 
  //element bigger than arr[i] and placing it before it.
  // At end of ith iteration, elements arr[n-1] to arr[n-1-i] are sorted
  for (i=1; i<n; i++) {
    curElem = arr[i];
    console.log("i=" + i + ", curElem=" + curElem);
    for (j=i-1; j>=0; j--) {
      if (arr[j] > curElem) {
        arr[j+1] = arr[j]; //Keep moving elements to right to make space for curElem
      } else {
        // Below doesn't work inside for loop because it has to be done at end of 
        //  for loop where above if condition is correct or not
//         arr[j] = curElem;
        break;
      }
    }
    console.log("j=" + j);
    arr[j+1] = curElem;
    console.log("arr=" + arr);
  }
  console.log("Insertion sort=" + arr);  
}


function insertionSortWhile(arr) {
  let i, j, curElem;
  const n = arr.length;
  
  //In ith iteration, find right place for ith element by finding 
  //element bigger than arr[i] and placing it before it.
  // At end of ith iteration, elements arr[n-1] to arr[n-1-i] are sorted
  for (i=1; i<n; i++) {
    curElem = arr[i];
    j = i-1;
   
    while(j>=0 && arr[j] > curElem) {
      arr[j+1] = arr[j];
      j--;
    }
    console.log("j=" + j);
    arr[j+1] = curElem;
    console.log("arr=" + arr);
  }
  console.log("Insertion sort=" + arr);  
}



let arr = [2, 1, 5, 4, 3, 0, 4, 9, 7];
// selSort(arr);
// bubbleSort(arr);
// bubbleSortBetter(arr);
// insertionSort(arr);
insertionSortWhile(arr);

console.log("*******************");  

arr = [2, 1, 5, 4, 3];
// selSort(arr);
// bubbleSort(arr);
// bubbleSortBetter(arr);
// insertionSort(arr);
insertionSortWhile(arr);

console.log("*******************");  

arr = [6, 1, 5, 4, 3];
// selSort(arr);
// bubbleSort(arr);
// bubbleSortBetter(arr);
// insertionSort(arr);
insertionSortWhile(arr);







