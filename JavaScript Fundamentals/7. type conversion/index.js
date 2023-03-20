//String Conversion
let value = true
alert(typeof value) // boolean
value = String(value) // now value is a string "true"
alert(typeof value)

//Numeric Conversion
let str = "123"
alert(typeof str) // string
let num = Number(str) // becomes a number 123
alert(typeof num)
let age = Number("anr")
alert(age) //NaN

//Boolean Conversion
alert(Boolean(1)) // true
alert(Boolean(0)) // false
alert(Boolean("hello")) // true
alert(Boolean("")) // false
alert(Boolean(false)) //false
