// use of class
class Student{
    constructor(name, id){
        this.name =  name;
        this.id = id;
    }
    // normal method that can access any object 
    greeting(){
        console.log("Welcome to ", this.name);
    }
    // static method that can ony access by the class itself
    static printStudentName(){
        console.log("Student name = ", this.name);
    }
}

var student1 = new Student("sohel", 900);
var student2 = new Student("shakila",1);
// console.log(student1, student2);
// console.log(student1.greeting())
// console.log(student1.printStudentName()) // out will be an error message
console.log(Student.printStudentName())