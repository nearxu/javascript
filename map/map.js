var item = {age:18};

var bank = [{age:12},{age:19},{age:1}];

bank = bank.map((v,i) => {
	return v.age < 18 ? ({...v,active:true}):v 
});


console.log(bank,'bank');
