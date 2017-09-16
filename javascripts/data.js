"use strict";

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

const whenconsLoad = function() {
	let consArray = JSON.parse(this.responseText).cons;
};