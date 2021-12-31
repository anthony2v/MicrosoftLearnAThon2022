/**
 * This application is a backend server developed for the fictional company
 * Tailwind Traders. Each store sends various information to this server for
 * processing.
 */

const { parse } = require("./adress-parser");
const { readDirectory, readDirectoryWithFileTypes } = require("./file-access");

console.log('Welcome to this application');
readDirectory("../stores");
readDirectoryWithFileTypes("../stores");
// const myOrder = "I want to order: 5 sushi to address: 1234 Denis Montroyal and here is my payment info: giftcard";
// const myParsedOrder = parse(myOrder);
// console.log(myParsedOrder.address);