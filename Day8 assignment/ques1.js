onload=as();
console.log("fssssssssd")
var count=0;
function as()
{
	setTimeout("fun1()",5000);
}
function fun1()
{
	var a =new Array("olive","lightblue","lightgreen","pink","purple","wheat","green");
	if(count<=6)
	{
		document.bgColor=a[count++];
		setTimeout("fun1()",5000);
	}
	else
	{
		count=0;
		as();
	}
}