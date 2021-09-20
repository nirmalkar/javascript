// aero function is not hoisted

const obj = {
    name:"JOHN",
    someMethod(){
        this.name = "Hemant"
        return this
    },
    arrowFunction:() => {
    return this
    }
}

function someMethod(){
    this.name = "Hemant"
    return this
}

const someMethod2 = () => {
    this.name = "Hemant"
    return this
}


// this one takes out the function then calls it
const temp = obj.someMethod
temp()
//this one calls function with the reference of obj
obj.someMethod() // output will be lexical env

//output will be true because we are comparing the same function one is inside the object but called outside(global) and other is already at outside.
console.log(temp() === someMethod());

console.log(obj.someMethod());
console.log(temp());
console.log(someMethod());
console.log(obj.arrowFunction());