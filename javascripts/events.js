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
    if (event.target.checked === true) {
        var breadPrice = dataPage.getBread(event.target.value);
        domPage.addTopping(breadPrice);
    // } else if (event.target.checked === false) {
    //     breadPrice.dom.getBread(event.target.value) * -1;
    //     dom.addTopping(breadPrice);
    }

});

// meatChooser.addEventListener("change", function(event) {
//     // if (event.target.checked === true) {
//     //     var meatPrice = SandwichMaker.getMeats(event.target.value);
//     //     SandwichMaker.addTopping(meatPrice);

//     // } else if (event.target.checked === false) {
//     //     var meatPrice = SandwichMaker.getMeats(event.target.value) * -1;
//     //     SandwichMaker.addTopping(meatPrice);
//     // }
// });

// vegieChooser.addEventListener("change", function(event) {
//     // if (event.target.checked === true) {
//     //     var vegiePrice = SandwichMaker.getVegies(event.target.value);
//     //     SandwichMaker.addTopping(vegiePrice);

//     // // } else if (event.target.checked === false) {
//     // //     var vegiePrice = SandwichMaker.getVegies(event.target.value) * -1;
//     // //     SandwichMaker.addTopping(vegiePrice);
//     // }
// });

// cheeseChooser.addEventListener("change", function(event) {
//     // if (event.target.checked === true) {
//     //     var cheesePrice = SandwichMaker.getCheese(event.target.value);
//     //     SandwichMaker.addTopping(cheesePrice);

//     // // } else if (event.target.checked === false) {
//     // //     var cheesePrice = SandwichMaker.getCheese(event.target.value) * -1;
//     // //     SandwichMaker.addTopping(cheesePrice);
//     // }

// });

// condimentChooser.addEventListener("change", function(event) {
//     // if (event.target.checked === true) {
//     //     var consPrice = SandwichMaker.getCons(event.target.value);
//     //     SandwichMaker.addTopping(consPrice);

//     // // } else if (event.target.checked === false) {
//     // //     var consPrice = SandwichMaker.getCons(event.target.value) * -1;
//     // //     SandwichMaker.addTopping(consPrice);
//     // }

// });


};

document.getElementById("button").addEventListener("click", function() {
	finalSandwichPrice = domPage.getTotalPrice();
	finalPrice.innerHTML = `total: $${finalSandwichPrice}`;
});


// const eventPage = {
//     sandwichChoosers
// };

module.exports = sandwichChoosers;























