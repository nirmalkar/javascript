// There are two ways of doing curring one way is through closure and the another is through bind method.
/**
 *
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @returns sum of all three numbers using currying
 */
function addOne(a) {
    return (b) => {
        return (c) => {
            return a + b + c
        }
    }
}

addOne(1)(2)(3)

/**
 *
 * @param {number} a
 * @param {number} b
 * @returns sum of all three numbers using currying
 */
function addTwo(a, b) {
    return function (c, d) {
        return a + b + c + d
    }
}

addTwo(1, 2)(3, 4)
/**
 *
 * @param {number} a
 * @param {number} b
 * @returns returns the sum of all the numbers
 */
function addThree(a) {
    return function (b) {
        if (b) {
            return addThree(a + b)
        }
        return a
    }
}

addThree(3)(2)(1)()
/**
 *
 * @param  {...any} args
 * @returns sum of all the numbers
 */
function addFour(...args) {
    let a = args.reduce((a, b) => a + b, 0)
    return function (...args) {
        let b = args.reduce((a, b) => a + b, 0)
        if (b) {
            return addFour(a + b)
        }
        return a
    }
}

console.log(addFour(1)(1)())
