"use strict";

const loadMeats = require('./meats');
const loadBreads = require('./bread');
const loadCheese = require('./cheese');
const loadCons = require('./cons');
const loadVegies = require('./vegies');

const errorFunction = () => {
	console.log("Hell to the naw!");
};

const whenMeatsLoad = function() {
	meatArray = JSON.parse(this.responseText).meats;
};

const whenBreadsLoad = function() {
	let breadsArray = JSON.parse(this.responseText).bread;
};

const whenCheeseLoad = function() {
	let cheeseArray = JSON.parse(this.responseText).cheese;
};

const whenVegiesLoad = function() {
	let vegiesArray = JSON.parse(this.responseText).vegies;
};

const whenConsLoad = function() {
	let consArray = JSON.parse(this.responseText).cons;
};

const sandwichCall = () => {
	loadSandwich(whenMeatsLoad, whenBreadsLoad, whenCheeseLoad, whenVegiesLoad, whenConsLoad, errorFunction);
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





module.exports = {sandwichCall, getMeats, getBreads, getCheese, getVegies, getCons};












