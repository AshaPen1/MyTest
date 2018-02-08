function recnum(num){

if(num>0){
	return num+recnum(num-1)



}
else
return num;

}

function tocap(str){
	var astr=str.split(' ');
	var nstr='';
	for(var i=0;i<astr.length;i++){
		nstr=nstr+' '+astr[0].charAt(0).toUpperCase()+astr[0].slice(1);
	}

}
fucntion(num1,num2){
  return num1===num2 ? '-1':(num1>num2)? true:false;
}



function tmconv(num){
	var tm=0;
	var min=0;
	if(num>60){
		tm=num/60;
		min=parseInt(tm)*60-num;
		tm=parseInt(tm)+' '+min;

	}
	else
		tm=num;
return tm;

	aannss
// duplicate values in a string
function(str){

var nstr=str.split('');
nstr.sort();
for(var i=0; i<nstr.length;i++){
		for(var j=0;j.nstr.length;j++){
				if(nstr[i]===nstr[j]){
					sstr=nstr[i]+nstr[j];
				}
		}
	}


}


function countSmileys(arr) {
var count=0;
var setofValuedvalues=[':)',':D',';-D',':~)'];
  arr.forEach(function(ele){ console.log(ele);
    if(setofValuedvalues.includes(ele))
     count++;
     });
     return count;
}



function validatePIN (pin) {
  var npin=pin.split('');
  var isValid='false';
  if(npin.length==4|| npin.length==6)
   { npin.forEach(function(ele){ var newele= Number(ele) ;console.log(newele);
      if(newele ===NaN){console.log("intrue");
          isValid= true;}
        else {console.log("in false");
          isValid= false;}
          });
          }
    else
    isValid=false;
    return isValid; 
  
}





