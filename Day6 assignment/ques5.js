console.log("commision earned ");
let sales=prompt("enter sales  made by you");
let commision;
switch(true)
{
	case (sales>=0 && sales<=5000):
		commision=+(sales*0.02);
		break;
	case (sales>=5001 && sales<=10000):
		commision=(5000*0.02)+ +(+(sales-5000)*0.05);
		break;
	case(sales>=10001 && sales<=20000):
		commision=+(5000*0.02)+ +(5000*0.05) + (+(+(sales-10000)*0.07));
		break;
	case(sales>=20001):
		commision=+(5000*0.02) + +(5000*0.05) + +(10000*0.07) + +(+(sales-20000)*0.1);
		break;
	default:
		commision=0.0;
}
console.log(commision);