/**
 * Higher order functions: A function that accepts another function as parameter or returns a function is called as HOFs.
 * let's take an example of calculating area, circumference, diameter, area of sector of a circle.
 */

function calcArea(radius) {
    if (!radius || radius < 0) return 'Please pass radius as parameter!'
    return (Math.PI * radius ** 2).toFixed(2)
}
/**
 *
 * @param {number} radius
 * @returns
 */
function calcCircumference(radius) {
    if (!radius || radius < 0) return 'Please pass radius as parameter!'
    return (2 * Math.PI * radius).toFixed(2)
}
/**
 * Area of sector calculation
 * @param {number} radius - First parameter should be the radius of circle
 * @param {number} angelOfSector - Second parameter should be the angle of sector of circle
 * @returns
 */
function calcAreaOfSector(radius, angelOfSector) {
    if (angelOfSector > 360 || angelOfSector < 0 || !radius || !angelOfSector)
        return
    return (angelOfSector / 360) * (Math.PI * radius ** 2).toFixed(2)
}
/**
 * Diameter of circle
 * @param {number} radius - the radius of circle
 * @returns
 */
function calcDiameter(radius) {
    if (!radius) return 'Please pass radius as parameter'
    return radius * 2
}
const radiusArr = [2, 4, 5, 3, 6, 7, 8]

Array.prototype.calc = function (myFunc, ...args) {
    const resultArr = []
    console.log(args)
    this.forEach((ele) => {
        resultArr.push(myFunc(ele, ...args))
    })
    return resultArr
}

const areaOfSector = radiusArr.calc(calcAreaOfSector, 60)
const area = radiusArr.calc(calcArea)
const circumference = radiusArr.calc(calcCircumference)
const diameter = radiusArr.calc(calcDiameter)
console.log('area Of Sector ==>', areaOfSector)
console.log('area of circle ==>', area)
console.log('circumference of circle ==>', circumference)
console.log('diameter of circle ==>', diameter)
