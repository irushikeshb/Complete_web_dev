// using Function as variable value 

function interest(principal){
    let interest = 0.50;
    return principal * interest;
}

let principal = 2000;
var interest = interest(principal);
console.log('Interest is -->' +interest);
let finalamount = principal + interest;
console.log('Final Amount is -->' +finalamount);