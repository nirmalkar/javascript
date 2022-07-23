class Dinosaur {
    constructor(name, avgHeight, isVegetarian) {
        this.name = name
        this.avgHeight = avgHeight
        this.isVegetarian = isVegetarian
    }
}

const d1 = new Dinosaur('Tyrannosaurus Rex', 4.5, false)
const d2 = new Dinosaur('Ankylosaurus', 1.7, true)
console.log(d1)
console.log(d2)
