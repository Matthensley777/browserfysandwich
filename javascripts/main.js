"use strict";
console.log("main");
const doAll = require('./sandwich');
const eventPage = require('./events');

const SandwichMaker = (function() {

    // Private variable to store the price
    let totalPrice = 0;

    // Return the public interface that other code can interact with
    return {
        addTopping: function(toppingPrice) {
            totalPrice += toppingPrice;
            return toppingPrice;
        },
        getTopping: function() {
            return totalPrice;
        },
        getTotalPrice: function() {
            return totalPrice;
        }
    };
});

module.exports = SandwichMaker;