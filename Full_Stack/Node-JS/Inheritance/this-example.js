//                  This Keyword (Javascript)
// this keyword is used inside class functions to make a global object which can be accessed inside any of the class functions. 

class Captain{
	constructor(){
		this.firstname = "Steve";
		this.lastname = "Rogers";
	}
	getFullName(){
		console.log("My name is " +this.firstname+ " " +this.lastname+ "(Captain America)");
	}
}

p1 = new Captain();
p1.getFullName();