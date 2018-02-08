(function (){
	var x=0;
	return function myin(){
		x++;
	}
})();


var spinner={
	x:0,
			up:function(){
			console.log("up");
			return ++x;
		},
		down:function(){
			console.log("down");
			return --x;

		}



}
function primeFinder(){
	var cache ={};
	 function isPrime(n){
	 	console.log("processing for n");
	 	if(n<3) return true;
	 	for(var i=2;i<n/2;i++)
	 		if(n%i===0) return false;
	 		return true;
	 }
	 return function(n){
	 	if(typeof cache[n]==='undefined')
	 		cache[n]=isPrime(n);
	 	return cache[n];
	 	
	 };

	

}


var after=function(times,fun){
		var count=0;
	
		
			return function my(){
				count++;
				if(count>times){
						
					fun();
				}

			}



}



var length = 10;
function fn() {
	console.dir(this);
	console.log(this.length);
}

var obj = {
  length: 5,
  method: function(fn) {
  	console.log("fn",fn);
    this.fn();
    arguments[0]();
  }
};

obj.method(fn, 1);