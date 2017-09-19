"use strict";
console.log("data");

const loadSandwichIngrediants = require('./sandwich'); 
const dataPage = require('./data');


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
	loadSandwichIngrediants(whenMeatsLoad, whenBreadsLoad, whenCheeseLoad, whenVegiesLoad, whenConsLoad, errorFunction);
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




















