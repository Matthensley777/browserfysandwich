"use strict";
console.log("data");

const loadSandwichIngrediants = require('./sandwich'); 
const dataPage = require('./data');
const dom = require('./dom');
const eventPage = require('./events');




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
	console.log("meats", meatArray);
};

const whenBreadsLoad = function() {
	breadsArray = JSON.parse(this.responseText).bread;
	console.log("breads", breadsArray);
};

const whenCheeseLoad = function() {
	cheeseArray = JSON.parse(this.responseText).cheese;
	console.log("cheese", cheeseArray);
};

const whenVegiesLoad = function() {
	vegiesArray = JSON.parse(this.responseText).vegies;
	console.log("vegies", vegiesArray);
};

const whenConsLoad = function() {
	consArray = JSON.parse(this.responseText).cons;
	console.log("cons", consArray);
};

const SandwichMaker = () => {
	loadSandwichIngrediants.loadMeats(whenMeatsLoad, errorFunction);
	loadSandwichIngrediants.loadBreads(whenBreadsLoad, errorFunction);
	loadSandwichIngrediants.loadCheese(whenCheeseLoad, errorFunction);
	loadSandwichIngrediants.loadCons(whenConsLoad, errorFunction);
	loadSandwichIngrediants.loadVegies(whenVegiesLoad, errorFunction);
};

const getMeats = () => {
	return meatArray;
};

const getBread = () => {
	return breadsArray;
};

const getCheese = () => {
	return cheeseArray;
};

const getVegies = () => {
	return vegiesArray;
};

const getCons = () => {
	return consArray;
};




module.exports = {SandwichMaker, getMeats, getBread, getCheese, getVegies, getCons};




















