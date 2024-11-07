// 1. Adding Elements

// push(element): Adds one or more elements to the end of the array.
// change the original array directly
const arr1 = [1, 2];
arr1.push(3); // arr1 becomes [1, 2, 3]

// unshift(element): Adds one or more elements to the beginning of the array.
// change the original array directly
const arr2 = [1, 2];
arr2.unshift(0); // arr2 becomes [0, 1, 2]

// concat(array): Merges two or more arrays, returning a new array.
const arr3 = [1, 2];
const newArr3 = arr3.concat([3, 4]); // newArr3 becomes [1, 2, 3, 4] ], arr3 remains [1, 2]

// Spread syntax([...arr, element]): Creates a new array by adding elements to an existing array.
const arr4 = [1, 2];
const newArr4 = [...arr, 3]; // newArr4 becomes [1, 2, 3]

// 2. Removing Elements
// pop(): Removes the last element from the array and returns it.
// change the original array directly
const arr5 = [1, 2, 3];
arr5.pop(); // arr5 becomes [1, 2]

// shift(): Removes the first element from the array and returns it.
// change the original array directly
const arr6 = [1, 2, 3];
arr6.shift(); // arr6 becomes [2, 3]

// splice(start, deleteCount): Removes elements from a specific position and optionally adds new elements.
// change the original array directly
const arr7 = [1, 2, 3, 4];
arr7.splice(1, 2); // arr7 becomes [1, 4]

// slice(start, end): Creates a new array with elements from the specified range.Does not modify the original array.
const arr8 = [1, 2, 3, 4];
const newArr8 = arr.slice(1, 3); // newArr8 is [2, 3]; arr8 remains [1, 2, 3, 4]

// 3. Replacing Elements
// splice(start, deleteCount, element): Replaces elements by removing and adding new ones.
const arr9 = [1, 2, 3, 4];
arr9.splice(1, 1, 5); // arr9 becomes [1, 5, 3, 4]

// 4. Finding Elements
// indexOf(element): Finds the index of the first occurrence of an element.
const arr10 = [1, 2, 3, 4];
arr10.indexOf(3); // returns 2

// lastIndexOf(element): Finds the index of the last occurrence of an element.
const arr11 = [1, 2, 3, 2];
arr11.lastIndexOf(2); // returns 3

// find(callback): Returns the first element that satisfies a condition.
const arr12 = [1, 2, 3, 4];
arr12.find((x) => x > 2); // returns 3

// findIndex(callback): Returns the index of the first element that satisfies a condition.
const arr13 = [1, 2, 3, 4];
arr13.findIndex((x) => x > 2); // returns 2

// 5. Transforming Arrays
// map(callback): Transforms each element and returns a new array.

const arr14 = [1, 2, 3];
const newArr14 = arr14.map((x) => x * 2); // newArr14 becomes [2, 4, 6]

// filter(callback): Filters elements based on a condition and returns a new array.
const arr15 = [1, 2, 3, 4];
const newArr15 = arr15.filter((x) => x % 2 === 0); // newArr15 becomes [2, 4]

// reduce(callback, initialValue): Reduces the array to a single value based on a callback function.
const arr16 = [1, 2, 3, 4];
const sum = arr.reduce((acc, val) => acc + val, 0); // sum is 10

// flat(depth): Flattens nested arrays up to a specified depth.
const arr17 = [1, [2, [3, 4]]];
arr17.flat(2); // returns [1, 2, 3, 4]

// flatMap(callback): Maps each element, then flattens the result by one level.
const arr18 = [1, 2, 3];
arr18.flatMap((x) => [x, x * 2]); // returns [1, 2, 2, 4, 3, 6]

// 6. Checking Array Properties
// includes(element): Checks if an element exists in the array.

const arr19 = [1, 2, 3];
arr.includes(2); // returns true
// some(callback): Checks if at least one element meets a condition.

const arr20 = [1, 2, 3];
arr20.some((x) => x > 2); // returns true
// every(callback): Checks if all elements meet a condition.

const arr21 = [1, 2, 3];
arr21.every((x) => x > 0); // returns true

// 7. Sorting and Reversing

// sort(callback): Sorts elements based on a comparison function.
const arr22 = [3, 1, 4, 2];
arr22.sort((a, b) => a - b); // arr becomes [1, 2, 3, 4]

// reverse(): Reverses the array in place.
const arr23 = [1, 2, 3];
arr23.reverse(); // arr becomes [3, 2, 1]

// 8. Joining and Converting

// join(separator): Joins all elements into a string with a specified separator.

const arr24 = [1, 2, 3];
arr24.join('-'); // returns "1-2-3"

// toString(): Converts the array to a string, separated by commas.
const arr = [1, 2, 3];
arr.toString(); // returns "1,2,3"

// 9. Copying and Filling

// slice(start, end): Creates a shallow copy of a portion of the array.
const arr25 = [1, 2, 3, 4];
const newArr25 = arr.slice(1, 3); // newArr becomes [2, 3]

// copyWithin(target, start, end): Copies part of the array to another location within the same array.
// change the original array directly
const arr26 = [1, 2, 3, 4];
arr26.copyWithin(1, 2); // arr26 becomes [1, 3, 4, 4]

// fill(value, start, end): Fills part of the array with a specific value.
// change the original array directly
const arr27 = [1, 2, 3, 4];
arr27.fill(0, 1, 3); // arr becomes [1, 0, 0, 4]