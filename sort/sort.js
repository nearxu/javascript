var a = [1, 2, 1, '2', 3];

function uniqueIndex(arr) {
    var res = [];
    for (var i = 0; i < arr.length; i++) {
        if (res.indexOf(arr[i]) === -1) {
            res.push(arr[i]);
        }
    }
    return res;
}

console.log(uniqueIndex(a));

function uniqueFilter(arr){
	return arr.filter(function(item,index,array){
		return array.indexOf(item) === index;
	})
}
console.log(uniqueFilter(a));

var b = [{ name: 'li', age: 12 }, { name: 'li', age: 21 },{ name: 'li', age: 1 },{ name: 'li', age: 2 }];
var c = [{ name: 'li', age: 12 }, { name: 'li', age: 12 },{ name: 'li', age: 12 },{ name: 'li', age: 21 }];

console.log(b.sort((a,b) => a.age - b.age));

console.log(c.filter(function(item,index,arr){
	return arr.findIndex((ele) => {
		// console.log('ele',ele);var b = [{ name: 'li', age: 12 }, { name: 'li', age: 21 },{ name: 'li', age: 1 },{ name: 'li', age: 2 }];
		// return item.age === ele.age // 对象的一个属性去重 
		return JSON.stringify(item) === JSON.stringify(ele); // 整个对象字符串去重
	}) === index ;
}))