//code snippet 1
let sayHi = () => {
  alert("Hello!")
}
sayHi()

function sayHi() {
  console.log(this)
  alert("Hello!")
}
