var promise1 = new Promise(function(res,rej){
	setTimeout(res,5000,'foo');
})
console.log(promise1)