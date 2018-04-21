console.log([1].push(...[2, 3]));

console.log([1] == [1].concat() && [1] == [..."1"]);

console.log([1, 2, 3, 4].find((value, index, arr) => value > 4));

for (let i of "abc") {
  console.log(i);
}

// const pick = (obj, arr) =>
//   arr.reduce((acc, cur) => (cur in obj && acc[cur] === obj[cur], acc), {});
// console.log(pick({ a: 1, b: "2", c: 3 }, ["a", "c"]));

const remove = (arr, fn) =>
  Array.isArray(arr)
    ? arr.filter(fn).reduce((acc, cur) => {
        arr.splice(arr.indexOf(cur), 1);
        return acc.concat(cur);
      }, [])
    : [];
console.log(remove([1, 2, 3, 4], n => n % 2 == 0)); // [2, 4]

const sim = (arr, arr1) => arr.filter(v => arr1.indexOf(v) > -1);
console.log(sim([1, 2], [1, 2, 3]));

const dif = ([])