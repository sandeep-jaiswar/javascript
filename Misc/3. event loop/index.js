//https://dev.to/lydiahallie/javascript-visualized-event-loop-3dif

//code snippet 1
const foo = () => console.log("First")
const bar = () => setTimeout(() => console.log("Second"), 0)
const baz = () => console.log("Third")
bar()
foo()
baz()
