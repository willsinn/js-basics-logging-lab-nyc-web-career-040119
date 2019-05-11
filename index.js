const driver = 'bob';
let driverStr = `is the driver variable name`;

function sentence() {
    console.log("this code was called");
}
function car() {
  console.log(driver);
}
function carDriver() {

  console.log(driver, driverStr);

}
car(driver);
sentence();
carDriver(driver, driverStr);
