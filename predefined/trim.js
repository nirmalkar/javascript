/**
 * regular trim func just removes whitespace from right and left side of the string. it doesn't remove whitespace inside the sentence.
 * but our ourTrim removes whitespace for left, right and inside the sentence.
 * @returns trimmed string with the required whitespace
 */

String.prototype.ourTrim = function () {
    const strArr = this.split(' ')
    const arr = []
    let trimmedStr = ''
    for (let i = 0; i < strArr.length; i++) {
        if (strArr[i] !== '') {
            arr.push(strArr[i])
        }
    }
    for (ele in arr) {
        trimmedStr = trimmedStr === '' ? arr[ele] : trimmedStr + ' ' + arr[ele]
    }
    return trimmedStr
}

const someString = '   Hello    this is Hemant      '
const regularTrim = someString.trim()
const ourTrim = someString.ourTrim()
console.log(regularTrim)
console.log(ourTrim)
