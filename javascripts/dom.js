"use strict";

console.log("dom");

const loadSandwichIngrediants = require('./sandwich');



let totalPrice = 0;

const addTopping = (toppingPrice) => {
    totalPrice += toppingPrice;
    return toppingPrice;
};

const getTopping = () => {
    return totalPrice;
};

const getTotalPrice = () => {
	console.log("price", totalPrice);

    return totalPrice;

};


module.exports = {addTopping, getTopping, getTotalPrice};