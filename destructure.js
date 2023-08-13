// use destructur array and object
const person = {
    name:'sohelrana',
    age:20,
    salary:25,
    country:'Bangladesh',
    job:{
        job1:"Developer",
        job2:"Freelancer",
    }
}

// const {salary,name, job:{job1}} =person;
// console.log(name, salary, job1);

const country = [ "Bangladesh", "France", "Germany", "United States", "Japan", "Arabia"];
const [country1, country2,  country3, ...rest ] = country;
console.log(rest  )    

const friends = ['salman','amir','sohel'];
const [name, ...allName] = friends;
const mixArr = [...country, ...friends];
// console.log(name, allName)
// console.log(mixArr)