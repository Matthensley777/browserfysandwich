"use strict";
console.log("events");

const dataPage = require('./data');
const loadSandwichIngrediants = require('./sandwich'); 
const domPage = require('./dom');

let finalSandwichPrice = 0;

// Variable to hold topping that the user selects
let selectedTopping;

// Get a reference to the <select> element that has all the meat options
let meatChooser = document.getElementById("meats");
let breadChooser = document.getElementById("bread");
let vegieChooser = document.getElementById("vegies");
let cheeseChooser = document.getElementById("cheese");
let condimentChooser = document.getElementById("condiments");
let finalPrice = document.getElementById("finalPrice");



const sandwichChoosers = (getBread) => {

breadChooser.addEventListener("change", function(event) {
    var breadPrice;
    if (event.target.checked === true) {
        breadPrice = dataPage.getBread(event.target.value);
        console.log("breadPrice", breadPrice);
        domPage.addTopping(breadPrice);
    } else if (event.target.checked === false) {
        breadPrice = dataPage.getBread(event.target.value) * -1;
        domPage.addTopping(breadPrice);
    }

});

meatChooser.addEventListener("change", function(event) {
    var meatPrice;
    if (event.target.checked === true) {
        meatPrice = dataPage.getMeats(event.target.value);
        console.log("meat", meatPrice);
        domPage.addTopping(meatPrice);

    } else if (event.target.checked === false) {
        meatPrice = dataPage.getMeats(event.target.value) * -1;
        domPage.addTopping(meatPrice);
    }
});

vegieChooser.addEventListener("change", function(event) {
    var vegiePrice;
    if (event.target.checked === true) {
        vegiePrice = dataPage.getVegies(event.target.value);
        domPage.addTopping(vegiePrice);

    } else if (event.target.checked === false) {
        vegiePrice = dataPage.getVegies(event.target.value) * -1;
        domPage.addTopping(vegiePrice);
    }
});

cheeseChooser.addEventListener("change", function(event) {
    var cheesePrice;
    if (event.target.checked === true) {
        cheesePrice = dataPage.getCheese(event.target.value);
        domPage.addTopping(cheesePrice);

    } else if (event.target.checked === false) {
        cheesePrice = dataPage.getCheese(event.target.value) * -1;
        domPage.addTopping(cheesePrice);
    }

});

condimentChooser.addEventListener("change", function(event) {
    var consPrice;
    if (event.target.checked === true) {
        consPrice = dataPage.getCons(event.target.value);
        domPage.addTopping(consPrice);

    } else if (event.target.checked === false) {
        consPrice = dataPage.getCons(event.target.value) * -1;
        domPage.addTopping(consPrice);
    }

});


};

document.getElementById("button").addEventListener("click", function() {
	finalSandwichPrice = domPage.getTotalPrice();
	finalPrice.innerHTML = `total: $${finalSandwichPrice}`;
});




module.exports = sandwichChoosers;























