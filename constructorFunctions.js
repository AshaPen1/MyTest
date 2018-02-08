// contructor functions are invoked using new
// this --> reffers to new Object
//default return values is This(new object)
//protatypal inheritance

var Mycons=function(){
	this.id=10;
	function display(){
		console.log("name      ",this.name,"id    ",this.id);
	}

}
var e1=new mycons();
e1.name="magesh";
var e2=new mycons();
e2.name="suresh";