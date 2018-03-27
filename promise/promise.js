function timeout(ms){
	return new Promise((res,rej) =>{
		setTimeout(res,ms,'done')
	});
}

timeout(1000).then(value =>{
	console.log(value);
})
