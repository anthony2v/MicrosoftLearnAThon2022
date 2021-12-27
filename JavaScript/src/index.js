const { parse } = require("./adress-parser");

console.log('Welcome to this application');
const myOrder = "I want to order: 5 sushi to address: 1234 Denis Montroyal and here is my payment info: giftcard";
const myParsedOrder = parse(myOrder);
console.log(myParsedOrder.address);