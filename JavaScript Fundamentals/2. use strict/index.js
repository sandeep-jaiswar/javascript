// The "use strict" directive was new in ECMAScript version 5.
// It is not a statement, but a literal expression, ignored by earlier versions of JavaScript.
// The purpose of "use strict" is to indicate that the code should be executed in "strict mode".
// With strict mode, you can not, for example, use undeclared variables.

//code snippet 1
//Using a variable, without declaring it
// "use strict"
// x = 3.14

//code snippet 2
//Deleting a variable
// "use strict"
// let x = 3.14
// delete x

//code snippet 3
//Duplicating a parameter name
// "use strict"
// function x(p1, p1) {}

//code snippet 4
//Octal escape characters
// let x = "\010"

//code snippet 5
//Writing to a read-only property
// const obj = {}
// Object.defineProperty(obj, "x", { value: 0, writable: false })
// obj.x = 3.14
