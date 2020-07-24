const x=document.getElementById('welcome');
let name=prompt("what's your name?");
document.write(`Hello ${name} !! Welcome to our page..`);

const ctime=document.getElementById('time');
function clock(){
	let date= new Date();
	let time=date.toLocaleTimeString();
	ctime.innerText = time;
}
setInterval(clock,1000);

function myFunction() {
   var element = document.body;
   element.classList.toggle("dark-mode");
}