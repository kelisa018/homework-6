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
