console.log("loops");
for (var i = 1; i <= 100; i++)
{
	if(i%15==0)
		console.log("value of i is",i,"fizzbuzz");
	else if(i%3==0)
		console.log("value of i is",i,"fizz");
	else if(i%5==0)
		console.log("value of i is",i,"buzz");
}