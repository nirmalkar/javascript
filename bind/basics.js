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
    getHobbiesAndInterests: () => {
        console.log(this.hobbies)
        return `My hobbies are ${this.hobbies[0]}`
    },
}

const intro = someObj.getIntro
console.log(intro())
const johnsIntro = intro.bind(someObj)
console.log(johnsIntro())
