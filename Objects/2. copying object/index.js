//code snippet 1
// const user = {
//   name: "John",
// }
// const admin = user // copy the reference
// admin.name = "Sanderson"
// console.log(user)
// console.log(admin)

//code snippet 2
// let a = {}
// let b = {}
// alert(a > b)

//code snippet 3
let user = {
  name: "John",
}
let clone = {}
for (let key in user) {
  clone[key] = user[key]
}
// alert(JSON.stringify(user))
// alert(JSON.stringify(clone))
alert(user == clone)
