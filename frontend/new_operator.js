

// The new operator lets developers create an instance of a user-defined object type or of one the built-in
// object types that has a constructor function.



//Constructor
//=>doesn't return anything & start with capital letter

function Person(name, age){
    this.name = name;
    this.age = age;
    console.log(this);
}

Person.prototype.talk = function (){
    console.log(`Hi , my name is ${this.name}`)
};

let p1 = new Person("adam",23);
let p2 = new Person("eve",25);