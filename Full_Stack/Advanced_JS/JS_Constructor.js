class Employee {
  constructor() {
    this.salary = 60000;
    this.paidleaves = 2;
    this.sickleaves = 5;
  }
  getAnnualSalary() {
    console.log(this.salary * 12);
  }
  getPaidLeave() {
    console.log(this.paidleaves * 12);
  }
  getSickLeaves() {
    console.log(this.sickleaves);
  }
}
e1 = new Employee();
e1.getAnnualSalary();
e1.getPaidLeave();
e1.getSickLeaves();
