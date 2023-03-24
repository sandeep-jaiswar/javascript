//code snippet 1
console.log("Start")
setTimeout(() => {
  console.log("Timeout")
}, 0)
Promise.resolve().then(() => {
  console.log("Promise")
})
console.log("End")

//code snippet 2
const apiUrl = "https://fakestoreapi.com/products"

fetch(apiUrl)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok")
    }
    return response.json()
  })
  .then((data) => {
    console.log(data)
  })
  .catch((error) => {
    console.error("There was a problem with the API call:", error)
  })
