/**
  Heap sort
  
             9
           8    7
          6 7  2 6
        5 1 
*/


// [undefined, 9, 8, 7, 6, 7, 2, 6, 5, 1] ... len = 10, nodes = 9
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
  console.log(a);
}

let a = [undefined, 9, 8, 7, 6, 7, 2, 6, 5, 1];

insert(a, 20); 

a = [undefined, 9, 8, 7, 6, 7, 2, 6, 5, 1];
insert(a, 0); 

insert([], 20);

insert([0], 20);




