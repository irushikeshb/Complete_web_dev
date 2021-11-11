class Employee {
  constructor() {
    this.salary = 68000;
  }
  getSalary() {
    console.log(this.salary);
  }
}
class ContractEmployee extends Employee {
  constructor() {
    super();
    this.contractperiod = "1.5 years";
  }
  getContractEmployeeSalary(){
    console.log("The salary is " +this.salary);
  }
  getContractPeriod() {
    console.log("Contract time period is " +this.contractperiod);
  }
}
c1 = new ContractEmployee();
c1.getContractEmployeeSalary();
c1.getContractPeriod();