// how to use arrow function

// function add(x, y){
//     return x + y;
// }
// var add = function(a,b){
//     return a + b;
// }
// var add = (a, b)=> a + b;
// var add = a => a;
var vishal = (x, y, z)=>{
    return x + y + z;
}

// var result = add(5);
// console.log(result);
var result2 = vishal(5,5,10);

// return with the same line of arrow functions
const returnWithOneLine = (x, y, z) => "return with one line of arrow functions";
// console.log(returnWithOneLine());

// use fo this keyword in arrow functions
const person = {
    name: "John",
    age: "16",
    greeting:function(){
        console.log(this);
     return   function nestedFun(){
            console.log(this);
        }
    }
}
// function greetingES5(name) {
//     console.log(this);
// }
// const greeting = (name) =>{
//     console.log("Welcome to", name);
//     console.log(this);
// }
console.log(person.greeting()())
// person.greeting()
// greetingES5("Sohel ")
// greeting("Sohel ")