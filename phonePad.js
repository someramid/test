/*
  Phone keypad problem
*/

//GOTCHA: Keys in JSON should be strings, I gave numbers
var phoneNumToCharLookup = {
  0: "0",
  1: "1",
  2: "ABC",
  3: "DEF",
  4: "GHI",
  5: "JKL",
  6: "MNO",
  7: "PQRS",
  8: "TUV",
  9: "WXYZ"
}

/*
  Tree structure of possible strings for a given number like 120
  
                root
                 1     Letters/numbers for 1 on phone keypad
               A B C   Letters/numbers for 2 on phone keypad
               0 0 0   Letters/numbers for 0 on phone keypad

So, combinations of final strings are 1A0, 1B0, 1C0

*/

//GOTCHA: forgetting writing function 
function recursionAsString(arr, prefix, remNumber){
//   remNumber = remNumber + "";
  //Breaking condition
  if (remNumber == "") {
    arr.push(prefix);
    //GOTCHA: I'm forgetting to return because it's update by ref
    return;
  }
  
  //Decrease scope
  const curNum = remNumber[0];
  remNumber = remNumber.substring(1);
  
  //Call recursion with decresed scope
  const charsArr = phoneNumToCharLookup[curNum], len = charsArr.length;
  for(let i=0; i<len; i++) { //Call recursion with all posible letters for curNum
    recursionAsString(arr, prefix + charsArr[i], remNumber);
  }
  
  //Aggregate data
  // N/A because we're adding strings to array
}

let arr = [];
recursionAsString(arr, "", "12");
console.log(arr);


function recursionAsNumber(arr, prefix, remNumber){
  //Breaking condition
  if (remNumber == 0) {
    arr.push(prefix);
    return;
  }
  
  //Decrease scope
  const curNum = remNumber%10;
  remNumber = parseInt(remNumber/10); //Decreased scope
  
  //Call recursion with decreased scope
  const charsArr = phoneNumToCharLookup[curNum], len = charsArr.length;
  for(let i=0; i<len; i++) {//Call recursion with posible letters for curNum
    recursionAsNumber(arr, charsArr[i] + prefix, remNumber);
  }
  
  //Aggregate data
  // N/A because we're adding strings to array
}

arr = [];
recursionAsNumber(arr, "", 123);
console.log(arr);








