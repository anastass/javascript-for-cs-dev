JavaScript for C# Developers
============================


# Tools #

	jslint	;use 'npm install -g jslint' to install it

# Miscellaneous #
	// JavaScript types
	value      - boolean, string, number
	reference  - object
	delegate   - function
	special    - undefined

	// type detection
	'typeof' operator

	// special types
	null		- value is not assigned
	undefined	- variable is not defined

	// special values
	Number.MIN_VALUE
	Number.MAX_VALUE
	Number.POSITIVE_INFINITY
	Number.NEGATIVE_INFINITY

	// NaN - Not a Number (Example: 10 / "zero" returns NaN value)
	isNaN(val) 	- test val for not a number
	isNaN(val) 	- test val for not a number

	// flow control
	if (true) {} 				// true
	if (false) {} 				// false	
	if ("hello") {} 			// true	
	if ("") {} 					// false (an empty string)
	if (25) {} 					// true
	if (0) {} 					// false (zero)
	if (10/0) {}  				// false (NaN)
	var a = null; if (a) {} 	// false (null)
	if (c) {} 					// false (undefined)

	// reference object
	var a = new Object();		// "object"
	var b = new Array();		// "object"

	// working with arrays
	c.length 					// size

	c.push({}) 					// add to end
	c.pop() 					// remove from end
	c.shift() 					// remove from beginning
	c.unshift({}) 				// add to beginning

	c.IndefOf(obj) 				// positional access
	c.lastIndexOf(obj)

	// ... and slice, splice, concat
	var fruits = ["Banana", "Orange", "Apple", "Mango"];
	fruits.splice(2,0,"Lemon","Kiwi");	// Banana,Orange,Lemon,Kiwi,Apple,Mango

	Note: 
		All functions in JavaScript return a value (default "undefined")
		"this" applies to the owner of the function

	// this
	var foo = function() {...};	// in case of a global scope...
	foo(); 						// this points to the [Object Window]

	bind() lets you to change the owner 
	       (change the context in whtch function is executed)

	Note: Only functions in JavaScript create a scope; block does not!


# Related articles #
[JSON: serialize and deserialize functions in JavaScript](http://www.kristofdegrave.be/2012/07/json-serialize-and-deserialize.html)