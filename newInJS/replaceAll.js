// replace all the dogs with monkeys
const p =
    'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?'

console.log(p.replaceAll('dog', 'monkey'))
// expected output: "The quick brown fox jumps over the lazy monkey. If the monkey reacted, was it really lazy?"

//replace all the pizzas with pastas
const foodBio =
    'Pizza is my favorite dish. Basically pizza is an Italian dish that is made up of Flour, cheese, tomato, pizza sauce and yeast.'
//expected output: Pasta is my favorite dish. Basically pizza is an Italian dish that is made up of Flour, cheese, tomato, pizza sauce and yeast.
console.log(foodBio.replaceAll('pizza', ''))
console.log(foodBio.replace('Pizza', returnPasta()))
function returnPasta() {
    return 'Pasta'
}
