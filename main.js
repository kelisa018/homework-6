// Task1
var arr = [7, 13, 3, 19, 27];
function howManySeven(i){
  var str = i.toString();
  var sum = 0;
  for(n in str){
    if(str[n] === '7'){
      sum = sum + 1;
    }
  }
  return sum;
}

function getSevenCol(arr){
  var sum = 0;
  for(n in arr){
    sum = sum + howManySeven(arr[n]);
  }
  return sum;
}
console.log(getSevenCol(arr));

// Task2
var arr = ["p", "o", "r", "m", "i", "g", "n", "m", "a", "g", "r"];
var n = 0;
var o = 0;
var res = "";
for (var i = 0; i < arr.length; i++){
  if(n === 0){
   res = res + arr[o];
  }
  else res = res + arr[arr.length - 1 - o];
  if(n === 0){
    n = 1;
  }
  else {
    n = 0;
    o = o + 1;
  }
}
console.log(res);
