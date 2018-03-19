const object = { 'a': 5, 'b': 8, 'c': 10 };

const filterObj = (obj) => {
    obj = Object.assign({},obj);
    const result = [];
    Object.keys(obj).forEach((key) =>{
        const value = obj[key];
        if(value %5 ===0) {
            result.push(value);
        }
    })
    return obj;

}
console.log(filterObj(object));

// for...in循环：只遍历对象自身的和继承的可枚举的属性。
// Object.keys()：返回对象自身的所有可枚举的属性的键名。
// JSON.stringify()：只串行化对象自身的可枚举的属性。
// Object.assign()： 忽略enumerable为false的属性，只拷贝对象自身的可枚举