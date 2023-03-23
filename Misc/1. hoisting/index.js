//variable declaraction goes to top. just declaration not initialisation

//code snippet 1
// test()
// function test() {
//   console.log(a)
// }
// var a = 9

//code snippet 2
//Temporal dead zone (TDZ)
// function test() {
//   console.log(a)
// }
// test()
// let a = 9

//code snippet 3
// function test() {
//   console.log(a)
// }
// test()
// const a = 9
