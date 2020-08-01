var quotes=[
	'Be yourself; everyone else is already taken.',
	'You know you re in love when you can t fall asleep because reality is finally better than your dreams.',
	'In three words I can sum up everything I ve learned about life: it goes on',
	'No one can make you feel inferior without your consent.',
	'A friend is someone who knows all about you and still loves you.',
	'To live is the rarest thing in the world. Most people exist, that is all.',
	'Without music, life would be a mistake.',
	'We accept the love we think we deserve.',
]
function newquote(){
	var randomnumber=Math.floor(Math.random()*(quotes.length));
	document.getElementById('quotesDisplay').innerHTML=quotes[randomnumber];

}