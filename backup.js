// use default value as a function parameter

function add(num1, num2 = 10){
    // num2 =num2 || 1
    return num1 + num2;
}
let result =add(10, 22);
console.log(result);