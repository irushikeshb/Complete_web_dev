// JSON Object Example

let employee = {
    "firstname":"Pratik",
    "lastname":"Pandey",
    "salary":32000,
    "designation":"Software Engineer"
}
console.log("Hello My Name is " +employee.firstname+" "+employee.lastname);
console.log("I am a " +employee.designation+" and My Salary is " +employee.salary);

// JSON Array example
let students =[
    {"firstname":"Shri","lastname":"Shrotri","sport":"Cricket"},
    {"firstname":"Adi","lastname":"Sharma","sport":"FootBall"},
    {"firstname":"Ram","lastname":"Kumar","sport":"Hockey"},
    {"firstname":"Kiran","lastname":"Pundir","sport":"Basket Ball"}
]
students.forEach(function(student){
    console.log("My name is "+student.firstname+ student.lastname+  " and I love "+student.sport);
});