
let n=prompt("please enter a positive number");
let num=[];
for(let i=0;i<=n;i++)
{
	num.push(i);
}
console.log("this is the array of numbers initially",num);
let num1=num.filter((n)=>n%2!==0).map((n)=>n**3);
console.log("this is the filtered nd cube of numbers ",num1);

