let a=prompt("enter any number");
let checkifevenorodd=function(a)
{
	let result;
	if(a%2==0)
		result="even";
	else 
		result="odd";
	return result;
}
let b=checkifevenorodd(a);
console.log("The number entered is: ",a,"and it is: ",b);
