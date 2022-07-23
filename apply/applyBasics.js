const furnitureOne = {
    name: 'Table',
    madeOf: 'Wood',
}
const furnitureTwo = {
    name: 'Chair',
    madeOf: 'Wood',
}

function giveDescription(purposesOne, purposesTwo) {
    return (
        this.name +
        ' is made up of ' +
        this.madeOf +
        ' and it has various purpose like ' +
        purposesOne +
        ', ' +
        purposesTwo +
        '.'
    )
}
const a = giveDescription.apply(furnitureOne, [`study table`, `computer table`])
const b = giveDescription.apply(furnitureTwo, [`study chair`, `hall chair`])
console.log(a)
console.log(b)
