//print all the method of Math function
console.log(Object.getOwnPropertyNames(Math).filter(function (p) {
    return typeof Math[p] === 'function';
}));


console.log(this.Object.prototype);


//function to uppercase all the words in an array
Array.prototype.myUcase = function () {
  console.log(this);
  for (let i = 0; i < this.length; i++) {
    this[i] = this[i].toUpperCase();
  }
};

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.myUcase();
console.log(fruits);

// prototypal function for adding all the numbers in an array 
Array.prototype.sumUp = function () {
this.sum = 0;
  for (let i = 0; i < this.length; i++) {
    this.sum = this.sum + this[i];
  }
  return this.sum;
};

const nums = [1, 2, 3, 4, 5, 6];
const  n = nums.sumUp();
console.log(n);

// prototype function for merging two array
Array.prototype.mergeArr = function(arr){
    arr.myUcase()
    arr.forEach(ele => this.push(ele))
    return this
}
const concat = fruits.mergeArr(["Grapes", "Blueberries"])
console.log(concat);

// custom Object.keys
const someObj= {userName:"Hemant", age:27, height:165, eyeColor:"brown", skinColor:"brown"}
Object.prototype.returnAllTheKeys  = function(){
    console.log(this);
    this.keysArr = []
    for(k in this){
        this.keysArr.push(k)
    }
    return this.keysArr
}
const keys = someObj.returnAllTheKeys()
console.log(keys);

// custom Object.values
Object.prototype.returnAllTheValues = function(){
    this.values = []
    for(key in this){
        if(typeof this[key] !== "function" && typeof this[key] !== "object"){
            this.values.push(this[key])
        }
    }
    return this.values
}
const values = someObj.returnAllTheValues()
console.log(values);
