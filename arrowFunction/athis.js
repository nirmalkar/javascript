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
// if any function is invoked without object it would be having global this