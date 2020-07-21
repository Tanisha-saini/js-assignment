class User
{
	constructor(name,age,email)
	{
		this.name=name;
		this.age=age;
		this.email=email;
		this.courses=[];
	}
	login(){
		console.log(`${this.name} have logged in successfully`);
		return this;
	}
	logout(){
		console.log(`${this.name} have logged out successfully`);
		return this;
	}
}
let user1=new User('dilip',25,'dilip@gmail.com');
user1.login().logout();


class moderator extends User{
	constructor(name,age,email,role){
		super(name,age,email);
		this.role='moderator';
		this.coins=0;
	}
	addcoins(user){
		this.coins++;
		console.log(`${this.name} have ${this.coins} coins`);
		return this;
	}
	removecoins(user){
		this.coins--;
		console.log(`${this.name} have ${this.coins} coins`);
		return this;
	}
}
let mod1=new moderator('akshay',26,'akshay@gmail.com')
let mod2=new moderator('rahul',25,'r@gmail.com');
mod1.addcoins();

class admin extends moderator{
	addcourse(user,course){
		user.courses.push(course);
		console.log(user);
	}
	removecourse(user,course){
		user.courses.pop(course);
		console.log(user);
	}
}
let ad1=new admin('aditya',28,'aadi@gmail.com');

ad1.addcourse(user1,'js');
ad1.addcourse(user1,'python');
ad1.addcourse(user1,'c++');
ad1.removecourse(user1,'python');