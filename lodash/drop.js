const drop = (arr, num) => {
  const length = arr == null ? 0 : arr.length;
  return length ? arr.slice(num) : arr;
};

console.log(drop([1, 2, 3], 3));

const range = (start, end, step = 1) => {
  let index = 0;
  let len = Math.ceil(end - start);
  let result = new Array(len);

  while (len--) {
    result[index++] = start;
    start += step;
  }
  return result;
};

console.log(range(0, 10));

const copyArr = (arr, arr1) => {
  let index = -1;
  const len = arr.length;
  while (++index < len) {
    arr1[index] = arr[index];
  }
  return arr1;
};

console.log(copyArr([1, 23], [4]));

// const chunk = (arr,size) => {
//     Array.from({length:Math.ceil(arr.length/size)}),
//     (v,i) => arr.slice(i*size,)

// }

const pick = (obj, arr) => {
  return arr.reduce(
    (acc, cur) => (cur in obj && (acc[cur] = obj[cur]), acc),
    {}
  );
};
console.log(pick({ a: 1, b: "2", c: 3 }, ["a", "c"]));

var a = [0, 1, 2, 3].reduce((pre, cur, index, arr) => {
  return pre + cur;
}, 10);

console.log(a);

var b = [[0, 1], [2, 3]].reduce((acc, cur) => acc.concat(cur));

console.log(b);

const getUrlParamter = str => {
  //   let str = window.location.search;
  let params = {};
  let key, value;
  str = str.substr(str.indexOf("?") + 1);
  let arr = str.split("&");
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i].indexOf("=");
    if (num) {
      key = arr[i].substr(0, num);
      value = arr[i].substr(num + 1);
      params[key] = value;
    }
  }
  return params;
};

console.log(getUrlParamter("www.baidu.com?user=122&id=1"));

const sleep = ms =>
  new Promise(resolve => setTimeout(() => console.log("1s"), ms));

console.log(sleep(1000));
console.log("hahha i first");
