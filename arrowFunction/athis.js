// in node globalThis is just like window in browser
const someObj = {
    myFunction(){
        console.log(this);
    },
    myFunction2(){
        const myObj2 ={
            myFunction3(){
                console.log(this)
            }
        }
        
        return myObj2
    }
}

const test1 = someObj.myFunction
test1() //window object
someObj.myFunction()

const test2 = someObj.myFunction2
console.log(test2().myFunction3());
// // if any function is invoked without object it would be having global this

function myFunc() {
    return this
}
const f = new myFunc()
f.a = 10
f.b = 20
console.log(f);

const obj ={
    simple(){
        return this
    }
}
console.log(obj.simple() === globalThis);
const t = obj.simple
console.log(t() === globalThis);