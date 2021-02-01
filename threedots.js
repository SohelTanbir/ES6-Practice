// use of spread operator
var ar1 = [10,20,30];
var ar2 = [40,50,60];
// var ar3 = ar1.concat(ar2);
// adding array with ... dots 
// var arr3 = [ar1, ar2];
var arr3 = [...ar1, ...ar2]
// console.log(ar3);
// console.log(arr3);
// find max number from array
let max =Math.max(...arr3);
console.log(max);