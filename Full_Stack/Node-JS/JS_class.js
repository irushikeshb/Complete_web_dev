class Car {
  constructor() {
    this.carname = "Maclaren p1";
    this.price = "₹ 430,00,000";
  }
  getCompany() {
    this.company = "Maclaren";
    console.log(this.company);
  }
  getCarName() {
    console.log(this.carname);
  }
  getPrice() {
    console.log(this.price);
  }
}
c1 = new Car();
c1.getCompany();
c1.getCarName();
c1.getPrice();
