var pikachu = {
  name: "pikachu",
  rank: 25,
  getName: function () {
    return this.name
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

var readLoud = function () {
  console.log(this.getName())
}

console.log(readLoud.call(pikachu, "pikachu", 25))
