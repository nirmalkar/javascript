const userOne = {
    firstName: 'Hemant',
    lastName: 'Nirmalkar',
    getFullName: function () {
        return this.firstName + ' ' + this.lastName
    },
}

const valueOne = userOne.getFullName()
console.log(valueOne)

const userTwo = {
    firstName: 'Ravi',
    lastName: 'Jain',
}

// Function borrowing using call
const valueTwo = userOne.getFullName.call(userTwo)
console.log(valueTwo)

//using same function for different objects

function greetings(placeLiving) {
    console.log(
        'Hello ' +
            this.firstName +
            ' ' +
            this.lastName +
            '. How are you doing?' +
            ' Currently you are in ' +
            placeLiving +
            ' right?'
    )
}

greetings.call(userOne, 'Bangalore')
greetings.apply(userTwo, ['Nagpur'])
