//Object constructor:
var object = new Object()

//Object's create method:
var object = Object.create(null)

//Object literal syntax
var object = {
  name: "Sudheer",
  age: 34,
}

//Function constructor:
function Person(name) {
  this.name = name
  this.age = 21
}
var object = new Person("Sudheer")

//Function constructor with prototype:
function Person() {}
Person.prototype.name = "Sudheer"
var object = new Person()
