//Bind does not gets invoked immediately, it can be invoked later.
const someObj = {
    userName: 'John doe',
    age: 28,
    profession: 'Software Engineer',
    hobbies: ['Watching Series', 'Playing video games', 'Swimming'],
    getIntro: function () {
        const name = this.userName
        const age = this.age
        const profession = this.profession
        return `Hi my name is ${name}, I am a ${profession} and I am ${age} years old.`
    },
}

const intro = someObj.getIntro()
console.log('Case 1', intro) //output
const intro2 = someObj.getIntro
console.log('Case 2', intro2()) //output

const johnsIntro = intro2.bind(someObj)
console.log('Case 3', johnsIntro())
