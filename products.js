var prod=[
			{id:5,name:"pen",cost:80,units:2,category:2},
			{id:7,name:"hen",cost:10,units:4,category:2},
			{id:9,name:"Zen",cost:50,units:5,category:2},
			{id:3,name:"ten",cost:40,units:1,category:2},
			{id:4,name:"len",cost:30,units:8,category:2},
			{id:2,name:"ken",cost:20,units:7,category:2}
		  ]

function sortprod(producsObj,sortby){
	
	if(sortby=="name"){
		producsObj.sort(function(a, b){
    		 var nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase();
		    if (nameA < nameB) //sort string ascending
		        return -1 ;
		    if (nameA > nameB)
		        return 1;
		    return 0 //default return value (no sorting)

				});
	}
	else{
		producsObj.sort(function(a, b){
    		return a[sortby]-b[sortby]

		})
	}
	

}


function myfilter(pro,filterBy,range){
var prodlist=[];
	for (var i=0;i<pro.length;i++)
		{
			if(pro[i][filterBy]>range){
				prodlist.push(pro[i]);

			}

		}
		return prodlist;

}

sortprod(prod,"id");
console.table(prod);
var x=myfilter(prod,"cost",30);
console.table(x);