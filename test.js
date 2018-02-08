 function add(){
		function parsArg(n){
			if(Array.isArray(n)) return  add.apply(this,n);
			if(n=='function') n=n();
		return isNaN(n) ? 0:parseInt(n);
		}
	return arguments.length<=1 ? parsArg(arguments[0]):parsArg(arguments[0])+add([].slice.call(arguments,1));
	}
//recorssion 

var  recFn=function(y){
	if(y>0)
		 y=0;
		else

		y=y+recFn(y-1);
	
	return y;
}


//another exp of recurssion


