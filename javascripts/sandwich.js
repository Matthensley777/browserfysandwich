"use strict";

console.log("sandwich");

const dataPage = require('./data');
const domPage = require('./dom');


const loadMeats = (onMeatLoad, onMeatError) => {
	const meatLoader = new XMLHttpRequest();
	meatLoader.addEventListener('load', onMeatLoad);
	meatLoader.addEventListener('error', onMeatError);
	meatLoader.open('GET', '../data/meats.json');
	meatLoader.send();
};

const loadBreads = (onBreadLoad, onBreadError) => {
	const breadLoader = new XMLHttpRequest();
	breadLoader.addEventListener('load', onBreadLoad);
	breadLoader.addEventListener('error', onBreadError);
	breadLoader.open('GET', '../data/bread.json');
	breadLoader.send();
};

const loadCheese = (onCheeseLoad, oncheeseError) => {
	const cheeseLoader = new XMLHttpRequest();
	cheeseLoader.addEventListener('load', onCheeseLoad);
	cheeseLoader.addEventListener('error', oncheeseError);
	cheeseLoader.open('GET', '../data/cheese.json');
	cheeseLoader.send();
};

const loadCons = (onConsLoad, onConsError) => {
	const consLoader = new XMLHttpRequest();
	consLoader.addEventListener('load', onConsLoad);
	consLoader.addEventListener('error', onConsError);
	consLoader.open('GET', '../data/cons.json');
	consLoader.send();
};

const loadVegies = (onVegiesLoad, onVegiesError) => {
	const vegiesLoader = new XMLHttpRequest();
	vegiesLoader.addEventListener('load', onVegiesLoad);
	vegiesLoader.addEventListener('error', onVegiesError);
	vegiesLoader.open('GET', '../data/vegies.json');
	vegiesLoader.send();
};


module.exports = {loadMeats, loadBreads, loadCheese, loadCons, loadVegies};
