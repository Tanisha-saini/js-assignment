console.log("concat");
	var myGirls = ["Cecilie", "Lone"];
	var myBoys = ["Emil", "Tobias", "Linus"];
	var myChildren = myGirls.concat(myBoys);
	console.log(myChildren); 

console.log("fill");
	var fruits = ["Banana", "Orange", "Apple", "Mango"];
	fruits.fill("Kiwi");
	console.log(fruits);

console.log("sort");
	var fruits = ["Banana", "Orange", "Apple", "Mango"];
	fruits.sort();
	console.log(fruits);

console.log("splice");
	var fruits = ["Banana", "Orange", "Apple", "Mango"];
	fruits.splice(2, 0, "Lemon", "Kiwi");
	console.log(fruits);

console.log("search");
	var str = "hello!";
	var n = str.search("ll");
	console.log(n);

console.log("replace");
	var str = "hello how are you!";
	var res = str.replace("how", "howww");
	console.log(res);

console.log("concatenate");
	var str1 = "Hello ";
	var str2 = "again!";
	var res = str1.concat(str2);
	console.log(res);

console.log("trim");
	const greeting = '   Hello world!   ';
	console.log(greeting.trim());