class Person {
  constructor(userName, age, height) {
    this.userName = userName;
    this.age = age;
    this.height = height;
  }
}

class Employee extends Person {
  constructor(userName, age, height, empId) {
    super(userName, age, height);
    this.empId = empId;
  }
}

const newPerson = new Person("Hemant", "26", "5.5");
console.log(newPerson);
const empOne = new Employee("Monty", "26", "5.5", "whjr-120");
console.log(empOne);
