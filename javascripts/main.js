"use strict";
console.log("main");

const loadSandwichIngrediants = require('./sandwich');
const eventPage = require('./events');

let totalPrice = 0;

// const SandwichMaker = function() {

//     // Private variable to store the price
// };
// Return the public interface that other code can interact with

const addTopping = (toppingPrice) => {
    totalPrice += toppingPrice;
    return toppingPrice;
};

const getTopping = () => {
    return totalPrice;
};

const getTotalPrice = () => {
    return totalPrice;
};


module.exports = {addTopping, getTopping, getTotalPrice};