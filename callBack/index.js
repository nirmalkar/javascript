const addNums = (numOne, numTwo) => {
    return numOne() + numTwo()
}

const result = addNums(
    function () {
        return 5
    },
    function () {
        return 3
    }
)
console.log(result)
