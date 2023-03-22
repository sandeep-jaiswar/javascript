var pikachu = {
  name: "pikachu",
  rank: 25,
  getName: function () {
    return this.name + " " + this.city
  },
}

var raichu = {
  name: "raichu",
  rank: 25,
}

//issue found
// var readLoud = () => {
//   console.log(this.getName())
// }

var readLoud = function (city) {
  this.city = city
  console.log(this.getName())
}

console.log(readLoud.call(pikachu, "mumbai"))
console.log(readLoud.apply(pikachu, ["canada"]))
const a = readLoud.bind(pikachu)
console.log(a("china", 25))
