//code snippet 1
for (let i = 0; i < 3; i++) {
  console.log(i)
}

//code snippet 2
for (var i = 0; i < 3; i++) {
  console.log(i)
}

//code snippet 3
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000)
}

//code snippet 4
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000)
}
