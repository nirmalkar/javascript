const harryPotterCharacter = {
    firstName: 'Hermione',
    lastName: 'Granger',
    getIntro: function () {
        return `I am ${this.firstName} ${this.lastName}`
    },
}

function greeting(greeting) {
    console.log(greeting + ' ' + this.getIntro())
}

const a = greeting.bind(harryPotterCharacter)

a('Hola')

function closure(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
    return function getUserFullName() {
        console.log(this.firstName + ' ' + this.lastName)
    }
}
const c = closure
c('Hemant', 'Nirmalkar')()
