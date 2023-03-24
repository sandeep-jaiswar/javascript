function Person(firstName, lastName) {
  this.firstName = firstName
  this.lastName = lastName
}

Person.prototype.greeting = function () {
  return `Hello there ${this.firstName} ${this.lastName}`
}

const person1 = new Person("John", "Doe")

console.log(person1.greeting())
