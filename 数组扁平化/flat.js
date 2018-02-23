var arr = [1, [2, [3, 4],[5,[6,[7,8,[9,10]]]]]];

function flat(arr) {
	var res =[];
	for(var i=0;i<arr.length;i++) {
		if(Array.isArray(arr[i])){
			res = res.concat(flat(arr[i]));
		}else{
			res.push(arr[i])
		}
	}
	return res;
}

console.log(flat(arr));