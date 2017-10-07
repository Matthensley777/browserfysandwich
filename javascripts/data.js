"use strict";
console.log("data");

const loadSandwichIngrediants = require('./sandwich'); 





let meatArray = [];
let breadsArray = [];
let cheeseArray = [];
let vegiesArray = [];
let consArray = [];

const errorFunction = () => {
	console.log("Hell to the naw!");
};


const whenMeatsLoad = function() {
	meatArray = JSON.parse(this.responseText).meats;
};

const whenBreadsLoad = function() {
	breadsArray = JSON.parse(this.responseText).bread;
};

const whenCheeseLoad = function() {
	cheeseArray = JSON.parse(this.responseText).cheese;
};

const whenVegiesLoad = function() {
	vegiesArray = JSON.parse(this.responseText).vegies;
};

const whenConsLoad = function() {
	consArray = JSON.parse(this.responseText).cons;
};

const SandwichMaker = () => {
	loadSandwichIngrediants.loadMeats(whenMeatsLoad, errorFunction);
	loadSandwichIngrediants.loadBreads(whenBreadsLoad, errorFunction);
	loadSandwichIngrediants.loadCheese(whenCheeseLoad, errorFunction);
	loadSandwichIngrediants.loadCons(whenConsLoad, errorFunction);
	loadSandwichIngrediants.loadVegies(whenVegiesLoad, errorFunction);
};

const getMeats = (value) => {
	// console.log("meat", value);
	return meatArray[0][value];
};

const getBread = (value) => {
// console.log("bread", value);
	return breadsArray[0][value];
};

const getCheese = (value) => {
	return cheeseArray[0][value];
};

const getVegies = (value) => {
	return vegiesArray[0][value];
};

const getCons = (value) => {
	return consArray[0][value];
};




module.exports = {SandwichMaker, getMeats, getBread, getCheese, getVegies, getCons};




















