
	/*
	Author: Richard Tapalian
	Week 1
	Date: 07/24/2013
	
	*/
	
	var stringtype = "mystring",
		bool = true,
		boolS="true",
		numbertype = 10,
		numbertypeS = "10";
		
	
	for (var i = 0; i<=10; i++)//Count up loop write on screen and console
	{
		console.log(i);
		document.write(i);
	}
	
	if (bool==boolS)//comparison of boolean
	{console.log("is true")
	}
	else {
	console.log("is false")
	}
	
	if (bool===boolS)
	{console.log("is true")
	}
	else {
	console.log("is false")
	}
	
	if (numbertype==numbertypeS)//comparison of number and string
	{console.log("is true");
	}
	else {
	console.log("is false");
	}
	
	if (numbertype===numbertypeS)
	{
		console.log("is true")
		}
	else {
		console.log("is false")
	}	
	console.log("before");
	console.log(stringtype);

	stringtype = stringtype + " more string";
	
	console.log("after");
	console.log(stringtype);
	console.log(numbertype == numbertypeS);
	console.log(numbertype === numbertypeS);
	
	for (var j = 10; j>=0; j=j-1)//count down loop write on screen and console
	{
		console.log(j);
		document.write(j);
	}
	


