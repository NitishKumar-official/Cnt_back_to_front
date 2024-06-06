
//inheritance is a mechanism that allows us to create new classes on the basic of already existing classes.

class Person{
    constructor(name, age){
        console.log("parent class constructor");
        this.name = name;
        this.age = age;
    }
    talk(){
        console.log(`Hi , my name is ${this.name}`)
    }
}

class Student extends Person{
    constructor(name, age, marks){
        console.log("student class constructor");
        super(name,age);                   //parent class construtor is being called
        this.marks = marks;
    }
}


class Teacher extends Person{
    constructor(name, age, subject){
        console.log("teacher class constructor");
        super(name, age);                  //parent class construtor is being called
        this.subject = subject;
    }
} 