let num=prompt("enter a number");
document.write("Table of ",num,);
document.write("<br>");
for(let i=1;i<=10;i++)
{
	let res=num*i;
	document.write(`${num} x ${i} = ${res}`);
	document.write("<br>"); 
}