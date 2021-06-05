// Math.random() for getting random numbers between 0 and 1
Math.random();
// getting random number between 0 and maximum number floating values
const getRandomLimited = (max) => {
  return Math.random() * max;
};
let val = getRandomLimited(5);
console.log(val);

// getting random number between 0 and maximum number int value values
const getRandomLimitedInt = (max) => {
  return parseInt(Math.random() * max);
};
val = getRandomLimitedInt(25);
console.log(val);

// getting random number between 0 and maximum number int value values
function getRandomArbitrary(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}
val = getRandomArbitrary(12, 20);
console.log(val);
