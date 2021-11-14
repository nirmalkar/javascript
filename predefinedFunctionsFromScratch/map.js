Array.prototype.mapCopy = function (someFunc) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        newArray.push(someFunc(this[i], i, this))
    }
    return newArray
}

const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const returnedArr = numArray.mapCopy((ele, i, arr) => {
    if (ele === 2) {
        return ele * 10
    }
    return ele
})
console.log(returnedArr)
// console.log(numArray.map((ele) => ele * 2))
