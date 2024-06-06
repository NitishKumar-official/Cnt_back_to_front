
// factory function name isliye kahte hain qki isse baar baar ek hi chij nhi likhna pdega sara object ke liye
//mtlb ek format bn gya bss call krte rho,

//lekin ek demerit hai sabke ke liye alag alag space create krta hai
//isliye iska use nhi ke bravar krte hain

function PersonMaker(name, age){
    const person ={
        name:name,
        age:age,
        talk(){
            console.log(`hi,my name is ${this.name}`);
        },
    };

    return person;

}