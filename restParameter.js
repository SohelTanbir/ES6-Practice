// rest parameter in ES6
// take unlimited parameters in a single function when you don't know amount of parameters

// normal parameters
function normalParameter(firstName, lastName){
    console.log("FullName =", firstName + " " + lastName);
}
normalParameter("Sohel","Rana", "Tanvir")

// rest parameters
function restParameter(...rest){
    console.log("FullName =",rest.toString());
}
restParameter("Sohel","Rana", "Tanvir")