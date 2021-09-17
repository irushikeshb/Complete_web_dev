// A child class can Inherit the functions of the parent class. 
class Parent{
	constructor(){
		this.age = 95;
	}

	displayName(){
		console.log("parent's name is Rao");
	}
}
 class Child extends Parent{
     // A child class can Inherit the properties of the parent class.
	constructor(){
        // In order too Inherit the properties, the child class has to call super() method in its consturctor()
		super();
	}
	getAgeofMyFather(){
		console.log("Parent's age is " + this.age);
	}
}
c1 = new Child();
c1.displayName();
c1.getAgeofMyFather();