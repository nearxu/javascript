class point{
	constructor(x,y){
		this.x=x;
		this.y=y;
	}
	sum(){
		return (this.x+this.y);
	}
}
// var b=new point(1,2);
// console.log(b.sum(),'b');

class cpoint extends point {
	constructor(props){
		super(props);
	}
}

let cp = new cpoint(1,2);
console.log(cp,'cp')