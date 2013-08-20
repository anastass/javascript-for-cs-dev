JavaScript for C# Developers
============================

Code based on JavaScript for C# Developers with Shawn Wildermuth (pluralsight.com)

# Tools #

	jslint	;use 'npm install -g jslint' to install it

# JavaScript Basics #
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

# JavaScript Functions #
	Note: 
		All functions in JavaScript return a value (default "undefined")
		"this" applies to the owner of the function

	// this
	var foo = function() {...};	// in case of a global scope...
	foo(); 						// this points to the [Object Window]

	bind() lets you to change the owner 
	       (change the context in whtch function is executed)

	Note: Only functions in JavaScript create a scope; block does not!

# Object-Oriented JavaScript #
	// dot syntax vs. bracket syntax
	var n1 = cust.name;
	var n2 = cust["name"];

	var comp1 = cust."company name";	// NOPE
	var comp2 = cust.["company name"];
	
	Note: Use instanceof to check if a variable is an instance of a particular "class"
		var auth = new Author(...);
		// auth instanceof Author => true

	// object vs class
		var Owner = {
			name: "Shawn",
			email: "shawn@foo.com",
			phone: "404-555-1212"
		}

		function Customer(name, email) {
			this.name = name;
			this.email = email;
			this.balance = 0;
		}

	// An alternative to Interfaces in JavaScript is Duck Typing
		function sendEmail(r) {
			var to = r.email;
			var name = r.name;
		}
		
		sendEmail(Owner);

		var c = new Customer("Bob", "bob@foo.com");
		sendEmail(c);

	// Detecting properties
	var c = new Customer();
	var has = c.hasOwnProperty("name");

# Practical Application #

# C\# #
	// object initializer
	var cust = new Customer()
	{
		Name = "Shawn",
		CompanyName" = "Wilder Minds",
		Address = new Address()
		{
			StreetAddress = "123 Main Street",
			...
		}
		...
	}

	// anonymous types
	var cust = new {
		Name = "Shawn",
		CompanyName" = "Wilder Minds",
		Address = new {
			StreetAddress = "123 Main Street",
			...
		}
		...
	}

	// .Net, dynamic + ExpandoObject
	dynamic foo = new ExpandoObject()
	foo.Name = "Shawn";	// add member on the fly

# Related articles #
[JSON: serialize and deserialize functions in JavaScript](http://www.kristofdegrave.be/2012/07/json-serialize-and-deserialize.html)

# Other articles #
[Quick Tip: Quick and Easy JavaScript Testing with “Assert”](http://net.tutsplus.com/tutorials/javascript-ajax/quick-tip-quick-and-easy-javascript-testing-with-assert/)
[propertyIsEnumerable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable)
[A RequireJS, Backbone, and Bower Starter Template](http://net.tutsplus.com/tutorials/javascript-ajax/a-requirejs-backbone-and-bower-starter-template/)

# About the Author #

[Shawn Wildermuth](http://wildermuth.com/) is a seven-time book author, a nine-time Microsoft MVP, member of a number of Microsoft "Insider" groups as well as an internationally recognized speaker on a variety of technologies.