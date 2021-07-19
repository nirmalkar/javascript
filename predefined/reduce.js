const items = [
    {
        name : "mango",
        price:120
    },
    {
        name : "water malone",
        price:120
    },
    {
        name : "sugar",
        price:60
    },
    {
        name : "banana",
        price:30
    },
    {
        name : "potato",
        price:25
    },
    {
        name : "flour",
        price:40
    },
    {
        name : "semolina",
        price:40
    },
    {
        name : "chocolate",
        price:150
    },
    {
        name : "ice cream",
        price:150
    },
    {
        name : "Haldiram bhujiya",
        price:85
    }
]
//reduce the price to total price
const totalPrice = items.reduce((total , item)=>{
return total + item.price
},0)
console.log(totalPrice)

// put the stuff of same price in an array

const reducedItemObj = items.reduce((groupedItems, item) => {
    const price = item.price
if(groupedItems[price] === undefined) groupedItems[price] = []
groupedItems[price].push(item)
return groupedItems
},{})
console.log(reducedItemObj)