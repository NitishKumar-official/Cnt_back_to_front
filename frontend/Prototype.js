

//prototypes are the mechanism by which javascript objects inherit features from one another.
// it is like a single template object that all objects inherit methods and properties rom without having their own copy


let arr = [1,2,3];
arr.seyHello = () => {
    console.log("hello! , i am arr");
};



/*
1. arr.__proto__                (reference)

arr.__proto__.push = (n) => {console.log("pushing number: ", n)}


arr.push(3);
pushing number: 3
*/ 

/* 
2. arr.prototype                    (actual object)

every object in javascript has a built in property, which is called its prototype. 
The prototype is itself an object, so th prototpye will have its own prototype, making what's called a prototpye 
chain, the chain end when we reach a prototype that has null for its own prototpye

3.string.prototype

*/