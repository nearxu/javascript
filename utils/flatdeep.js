const flat  = arr => Array.isArray(arr) ? arr.reduce((a,b) => [...flat(a),...flat(b)],[]):[arr];
console.log(flat([1, [2, [3, [4,[1,2,[1,2]]]], 5]]));

let result = ['a','b','c'].join('-');
let result1 = ['a','b','c'].toString();
console.log(result,result1);

let a= [1,2,3,4,5,67,8];
console.log(a.sort(() =>Math.random() - 0.5));