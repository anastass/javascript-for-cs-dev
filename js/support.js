"use strict";

var person = {
	name: "John",
	"last name": "Smith",
	age: 24
}

var courses = ['Using The Chrome Developer Tools', 'JavaScript for C# Developers'];

function DoIt() {
	console.log("Hello " + person.name + " you have a place for '" + courses[1] + "' course.");
}

function foo(one, two, three) {
	console.log('You have passed ' + arguments.length + ' arguments');
}
