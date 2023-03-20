// We can declare variables to store data by using the var, let, or const keywords.

// let – is a modern variable declaration.
// var – is an old-school variable declaration. Normally we don’t use it at all, but we’ll cover subtle differences from let in the chapter The old "var", just in case you need them.
// const – is like let, but the value of the variable can’t be changed.

//code snippet 1
// var c;
// var a = 9;
// a = 8;
// var a = 11;

//code snippet 2
// let b;
// let a = 10;
// a = 9;
// console.log(a);

//code snippet 3
//const pi = 3.1417

//scope
// 1. global
// 2. local
//2.1 functional scope
//2.2 block scope
//2.3 lexical scope

// function a() {
//     let val1 = 9; //functional scope
//     function b() {
//         console.log(val1); //9
//     }
// }
