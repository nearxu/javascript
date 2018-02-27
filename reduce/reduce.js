
// var pro = arr.reduce(function(pre,cur,index,arr){return pre * cur})

var a = [
	{age:123,name:'tom'},
	{age:10,name:'tom1'},
	{age:1,name:'tom2'}
];
const b = a.reduce((pre,cur) => pre+cur.age,0)
console.log(b,'b');