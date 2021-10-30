class Person {
    constructor(userName, address) {
        this.userName = userName
        this.address = address
    }
    getAge() {
        return 27
    }
    #getIntro() {
        return `Hi, This is Hemant Nirmalkar. I am ${this.getAge()} years old.`
    }
    sendIntro() {
        return this.#getIntro()
    }
}

const uname = 'Hemant Nirmalkar'
const address = 'HSR layout, Bangalore'
const person1 = new Person(uname, address)
console.log(person1.sendIntro())
