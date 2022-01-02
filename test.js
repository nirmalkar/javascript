//find all the duplicate numbers in the given array!!

function someFunc(arrOfNum) {
    console.log(arrOfNum.sort((a, b) => a - b))
    const freqObj = {}
    const repeatedNum = []
    for (let i = 0; i < arrOfNum.length; i++) {
        if (freqObj[arrOfNum[i]]) {
            freqObj[arrOfNum[i]] = arrOfNum[i] + 1
        } else {
            freqObj[arrOfNum[i]] = 1
        }
    }
    for (ele in freqObj) {
        if (freqObj[ele] > 1) {
            repeatedNum.push(ele)
        }
    }
    return repeatedNum
}

const result = someFunc([1, 3, 24, 5, 5, 4, 3, 6, 76, 7, 8, 3])
console.log(result)
