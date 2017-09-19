"use strict";

console.log("dom");

const loadSandwichIngrediants = require('./sandwich');
const eventPage = require('./events');
const dataPage = require('./data');
const dom = require('./dom');



let totalPrice = 0;

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