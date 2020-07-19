console.log("calculator");
let  firstoperand=prompt("enter the first number");
let  secondoperand=prompt("enter the  second number");
let x=prompt("what do you want to do ? ");
console.log(firstoperand,x,secondoperand);
switch(x)
{
	case '+':
		console.log(+firstoperand + +secondoperand);
		break;
	case '-':
		console.log(+firstoperand - +secondoperand);
		break;
	case '*':
		console.log(+firstoperand * +secondoperand);
		break;
	case '/':
		console.log(+firstoperand / +secondoperand);
		break;
	case '$':
		console.log("srqt of ",firstoperand," is",Math.sqrt(firstoperand),"sqrt of " ,secondoperand,"is ",Math.sqrt(secondoperand));
		break;
	case  '%':
		console.log(+firstoperand % +secondoperand);
		break;
	default:
		console.log("error");

}
// if(x=='+')
// 	console.log(firstoperand+secondoperand);
// else if(x=='-')
// 	console.log(firstoperan-secondoperand);
// else if(x=='*')
// 	console.log(firstoperand*secondoperand);
// else if(x=='/')
// 	console.log(firstoperand/secondoperand);
// else if (x=='^')
// 	console.log(firstoperand**firstoperand,secondoperand**secondoperand);
// else if(x=='%')
// 	console.log(firstoperand/100);