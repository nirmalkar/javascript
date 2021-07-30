/*
The nullish coalescing operator (??) is a logical operator that returns its right-hand side operand when 
its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.
*/
const foo = null ?? 'default string';
console.log(foo);
// expected output: "default string"

const baz = 0 ?? 42;
console.log(baz);
// expected output: 0

function calculateTotalPrice(productName, price, tax){
    tax = tax ?? 5
    productName = productName ?? "default product"
    const totalPrice = price + (price * tax/100)
    return `The total price of ${productName} is $${totalPrice}.`
}
console.log(calculateTotalPrice("Macbook pro", 2000, 3));