let a = [1, 2, 3];
let b = [3, 2, 4, 5];
let binarr = a.filter(m => b.includes(m));
let diffArr = a.concat(b.filter(m => !a.includes(m)));
console.log(binarr, "bin", diffArr);

let a = new Set([1, 2, 3]);
let b = new Set([3, 5, 2]);

// 并集
let a = new Set([1, 2, 3]);
let b = new Set([3, 5, 2]);
let unionSet = new Set([...a, ...b]);
let intersectionSet = new Set([...a].filter(x => b.has(x)));
let arr = Array.from(set); // [...set];
