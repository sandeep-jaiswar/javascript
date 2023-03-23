function outerFunction() {
  let a = 8
  function innerFunction() {
    a++
    console.log(a)
  }
  return innerFunction
}

const closure = outerFunction()
console.log(a)
closure()

//code snippet 1
// var a = 8
// const fn1 = () => {
//   a++
// }
// fn1()
// setTimeout(() => {
//   a++
//   console.log(a)
// }, 1000)
// fn1()
// fn1()
// console.log(a)
