// use destructur array and object
const person = {name:'sohelrana',age:20,salary:25,country:'Bangladesh'}

// const {salary,name} =person;
// console.log(name, salary);

const friends = ['salman','amir','sohel'];
const [name, ...allName] = friends;
console.log(name, allName)