// const arrmax = arr => Math.max(...arr);
// const arrmin = arr => Math.min(...arr);

// const deepFlat = arr => [].concat(...arr.map(v => Array.isArray(v) ? deepFlat(v):v));

// arr.push(1); arr.push({name:'123'}); pop; shift unshift //原有数组不变

// splice (n,m) // n 索引 m 个 原变
// slice //and so on 原不变
// [].concat(arr) // clone 

const diff = (a,b) => {const s = new Set(b); return a.filter((m) => !s.has(m))};
console.log(diff([1,2,3], [1,2,4]));
//  ES6 提供了新的数据结构 Set。它类似于数组，但是成员的值都是唯一的
let arr = [1,2,2,3,3,6];
console.log([...new Set(arr)]);
const filterUnique = arr => arr.filter((m) => arr.indexOf(m) ===arr.lastIndexOf(m));
console.log(filterUnique(arr));

// let arr1 = [[1,2,3],[1],[1,[,]]]; ###isErorr
// const flatArr= arr => arr.reduce((pre,cur) => Array.isArray(cur) ? flatArr(cur): pre.concat(cur),[]);
// console.log(flatArr(arr1));

const shuff = arr => arr.sort(() => Math.random() - 0.5);
console.log(shuff(arr));

const similarity = (arr, values) => arr.filter(v => values.includes(v));
// similarity([1,2,3], [1,2,4]) -> [1,2]

const without = (arr, ...args) => arr.filter(v => !args.includes(v));
// without([2, 1, 2, 3], 1, 2) -> [3]