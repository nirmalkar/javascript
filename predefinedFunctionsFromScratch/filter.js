Array.prototype.filterCopy = function (func) {
    const newArr = []
    for (let i = 0; i < this.length; i++) {
        if (func(this[i], i, this)) {
            newArr.push(this[i])
        }
    }
    return newArr
}

const array = ['one', 'two', 'three', 'four', 'Five']

console.log(array.filterCopy((ele, i, arr) => ele !== 'one'))
