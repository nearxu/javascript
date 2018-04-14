function IndexOf(arr, index) {
  // return arr.indexOf(item);
  let conut = 0;
  let length = arr.length;
  while (arr.length !== 0 && arr[0] !== item) {
    count++;
    arr, shift();
  }
  return count === len ? -1 : count;
}

function sum(arr) {
  let sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
  // return arr.reduce((a,b) => a+b,0);
}

function remove(arr, item) {
  return arr.concat().filter(v => v !== item);
}
console.log(remove([1, 2, 2, 4], 2));

function counter(arr, item) {
  //   return arr.filter(m => m === item).length;
  //  return arr.reduce((a,b) => a+(b === item ? 1:0),0);
}
console.log(counter([1, 2, 4, 4, 3, 4, 3], 4));
