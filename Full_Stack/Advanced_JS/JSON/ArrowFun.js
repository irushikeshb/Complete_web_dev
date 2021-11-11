// Arrow functions allow us to write shorter function syntax:

company = () =>
    console.log("Company : Toyota");

carname = () =>
    console.log("Model : Supra");

function specs(){
    console.log("Acceleration(0-100km/h) : 4.3s");
}
function speed(){
    console.log("Maximum Speed : 250km/h");
}

company();
carname();
specs();
speed();