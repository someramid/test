/**
  Heap sort
  
  
  MAX HEAP
             9
           8    7
          6 7  2 6
        5 4 
*/

let a = [undefined, 9, 8, 7, 6, 7, 2, 6, 5, 4];

a = [3, 2, 1, 4, 2, 4, 9]
function buildMaxHeap(input) {
  const a = [undefined], len = input.length;
  //Assuming valid array
  for (let i=0; i<len; i++) {
    a.push(input[i]);
    let j = a.length-1;
    //GOTCHA: Forgot parseInt in swap ... so, a[1.5] will be undefined and was replacing on heap array element in swap
    while(j>1 && a[parseInt(j/2)] < a[j]) { //swap if parent is smaller
      const parentIdx = parseInt(j/2);
      console.log(j);
      [a[parentIdx], a[j]] = [a[j], a[parentIdx]];
      j = parentIdx; //GOTCHA: I thought parseInt is not needed here because j>1 could still be true but a[j] in while condition and swap operation could pick something like a[1.5] which is undefined
    }
  }
  console.log("Build heap", a);
}

// buildMaxHeap(a);

// [undefined, 9, 8, 7, 6, 7, 2, 6, 5, 4] ... len = 10, nodes = 9
function insert(a, num){
  if (a.length == 0) {
    a[1] = num;
    console.log(a);
    return; //GOTCHA: Forgot returning here
  }
  
  a.push(num);
  //GOTCHA: was setting i to len-1 where I set len value before pushing num to array ... so i was 1 less than what I wanted.
  let i = a.length - 1, parentIdx; //i.e. num of nodes, here = 10
  
  while (i>=2 && a[parseInt(i/2)] < a[i]) {
    const parentIdx = parseInt(i/2);
    [a[parentIdx], a[i]] = [a[i], a[parentIdx]];
    i = parentIdx;
  }
  console.log("insert ", a);
}

a = [undefined, 9, 8, 7, 6, 7, 2, 6, 5, 4];

// insert(a, 20); 

// a = [undefined, 9, 8, 7, 6, 7, 2, 6, 5, 4];
// insert(a, 0); 

// insert([], 20);

// insert([0], 20);


//              9
//            8    7
//           6 7  2 6
//         5 4 
        
// a = [undefined, 9, 8, 7, 6, 7, 2, 6, 5, 4];
function replaceRootWithNumber(a, num) {
  //Replace root with number and then search it's right place
  
  a[1] = num;
  
  const len = a.length;
  let i = 1;
  
  //Move num down until will get smaller than child
  //GOTCHA was comparing a[2*i] and a[2*i + 1] with num instead of a[i]
  while(i<len && (a[2*i] > a[i] || a[2*i + 1] > a[i])) {
    if (a[2*i] > a[2*i + 1]) { //swap with higher number
      [a[2*i], a[i]]  = [a[i], a[2*i]];
    } else {
      [a[2*i + 1], a[i]]  = [a[i], a[2*i + 1]];
    }
    i = 2*i;
  }
  console.log("replaceRootWithNumber ", a);
  
}

// a = [undefined, 9, 8, 7, 6, 7, 2, 6, 5, 4];
// replaceRootWithNumber(a, 10);

a = [undefined, 9, 8, 7, 6, 7, 2, 6, 5, 4];
replaceRootWithNumber(a, 1);

function findIdx(a, num) {
  const len = a.length;
  if (len == 0) {
    return;
  }
  let i = 0;
  
  for (i=0; i<len; i++) {
    if (a[i] == num) {
      return i;
    } else if(a[i] < num) {
      break;
    }
  }  
}

let b = [undefined, 9, 8, 7, 6, 7, 2, 6, 5, 4];

console.log(findIdx(b, 20)); //number not in array
console.log(findIdx(b, 9)); //root node
console.log(findIdx(b, 4)); //last element
console.log(findIdx([], 1)); //empty array
console.log(findIdx([undefined, 1], 1)); //one node
console.log(findIdx([undefined, 5], 1)); //one node, not found



















