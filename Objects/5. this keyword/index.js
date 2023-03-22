//code snippet 1
// let user = {
//   name: "Sandeep",
//   age: 25,
//   sayHi() {
//     this.city = "banglore"
//     console.log(this)
//   },
// }
//user.sayHi()

//code snippet 2
// function hello() {
//   console.log(this)
// }
// hello()

//code snippet 3
let user = {
  name: "Sandeep",
  sayHi: function () {
    console.log(this, "1")
    const a = function () {
      console.log(this, "2")
    }
    a()
  },
}

user.sayHi()
