function call(a, b, callback) {
  console.log(a + b);
  callback();
}
function display() {
  console.log("The addition is 50");
}

call(25, 25, display);
