let marks=prompt("enter your marks");
console.log("your marks are:",marks);
let grade;
if(marks>='90')
	grade='A';
else if(marks<90 && marks>=80)
	grade='B';
else if(marks<80 && marks>=70)
	grade='C';
else 
	grade='D';
console.log("your grade is:",grade);
