// how to inherit properties from another class

class Parent{
    constructor(){
        this.fatherName = "ekbal khan";
    }
}

class Child extends Parent{
    constructor(){
        super();
        this.name = "shakib kahn";
        this.country = "Bangladesh"
    }
    getFather(){
        return this.fatherName;
    }

}
let child1 = new Child();
console.log(child1.getFather());