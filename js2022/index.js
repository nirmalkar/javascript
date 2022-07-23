//some of these things stuff are not available yet so they are not accessible
//Private variable in javascript
class someClass {
    static a = '#fff'
    static #a = '#f1f1f1'
}

console.log(someClass.a)

// Top level await
const a = await fetch('https://jsonplaceholder.typicode.com/todos')
console.log(a)

// Array.at
const arr = [1, 2, 3]
console.log(arr.at(1))
console.log(arr.at(0))
console.log(arr.at(-1))

// hasOwn: it works just like hasOwnProperty but it can't be overridden.
const obj = {
    a: 1,
    b: 2,
    c: 3,
}

console.log(Object.hasOwn('obj', 'a'))
// console.log(obj.hasOwnProperty('a'))
async function test() {
    const a = await fetch('https://jsonplaceholder.typicode.com/todos')
    console.log(a)
}
