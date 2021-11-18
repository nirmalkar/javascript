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
console.log(intro) //output
const intro2 = someObj.getIntro
console.log(intro2()) //output

const johnsIntro = intro.bind(someObj)
console.log(johnsIntro())
