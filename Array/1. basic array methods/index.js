//for each
//does not return anything
// does not mutate itself
// const array1 = ["a", "b", "c"]
// array1.forEach((element) => {
//   element = 5
//   return element
// })
// console.log(array1)

//map
//original array doesnt mutate
//return new array
// const array1 = ["a", "b", "c"]
// const a = array1.map((element) => {
//   element = 5
//   return element
// })
// console.log(a)
// console.log(array1)

//filter
//return new array with filter testing function
// og array is immutable
// const array1 = [2, 4, 1]
// const a = array1.filter((element) => {
//   if (element > 1) {
//     return element
//   }
// })
// console.log(a)
// console.log(array1)

//slice
//return new sliced array
// og array is immutable
// const array1 = [2, 4, 1]
// const a = array1.slice(0, 2)
// console.log(a)
// console.log(array1)

//splice
// og array is mutable
// splice condition removes elements which pass through
// const array1 = [2, 4, 1]
// const a = array1.splice(0, 2)
// console.log(a)
// console.log(array1)
