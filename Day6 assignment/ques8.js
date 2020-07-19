// function ask(question,yes,no)
// {
// 	if(confirm(question)) yes()
// 	else no();
// }
// ask(
// 	"do you agree?",
// 	function()
// 	{ alert("you agreed");},
// 	function()
// 	{ alert("you cancelled execution"); }
// );
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Do you agree?",
  () => alert("You agreed."),
  () => alert("You canceled the execution.")
);
