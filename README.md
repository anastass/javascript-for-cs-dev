JavaScript for C# Developers
============================

Code based on JavaScript for C# Developers with Shawn Wildermuth (pluralsight.com)

# Tools #

	jslint	;use 'npm install -g jslint' to install it
	bower

# Files #
	bower.json 	- define dependencies
	.bowerrc 	- specify bower instalaltion directory
	.gitignore 	- ignore vendor directory; use 'bower install' to initialize it 

# JavaScript Basics #
### JavaScript types ###
	value      - boolean, string, number
	reference  - object
	delegate   - function
	special    - undefined

	// type detection
	'typeof' operator

	// special types
	null		- value is not assigned
	undefined	- variable is not defined

### Special Values ###
	Number.MIN_VALUE
	Number.MAX_VALUE
	Number.POSITIVE_INFINITY
	Number.NEGATIVE_INFINITY

	// NaN - Not a Number (Example: 10 / "zero" returns NaN value)
	isNaN(val) 	- test val for not a number
	isNaN(val) 	- test val for not a number

### Flow Control ###
	if (true) {} 				// true
	if (false) {} 				// false	
	if ("hello") {} 			// true	
	if ("") {} 					// false (an empty string)
	if (25) {} 					// true
	if (0) {} 					// false (zero)
	if (10/0) {}  				// false (NaN)
	var a = null; if (a) {} 	// false (null)
	if (c) {} 					// false (undefined)

### Reference Object ###
	var a = new Object();		// "object"
	var b = new Array();		// "object"

### Working with Arrays ###
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
### Dot syntax vs. bracket syntax ###
	var n1 = cust.name;
	var n2 = cust["name"];

	var comp1 = cust."company name";	// NOPE
	var comp2 = cust.["company name"];
	
	Note: Use instanceof to check if a variable is an instance of a particular "class"
		var auth = new Author(...);
		// auth instanceof Author => true

### Object vs Class ###
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

### An alternative to Interfaces in JavaScript is Duck Typing ###
		function sendEmail(r) {
			var to = r.email;
			var name = r.name;
		}
		
		sendEmail(Owner);

		var c = new Customer("Bob", "bob@foo.com");
		sendEmail(c);

### Detecting properties ###
	var c = new Customer();
	var has = c.hasOwnProperty("name");

# Practical Application #
### Strictness in JavaScript ###
	"use strict";

	// use strict scope
	function () {
		"use strict";
		... 	// strict code
	}
	// unstrict code

	Use strict disallow: 
		- Use of Undefined Variables
			y = "good bye";						// exception

		- Duplicate Object Properties
			var x = {name: me, name: "us"}; 	// exception

		- Writing to Read-Only Properties
			var s = "hello";
			s.length = 5; 						// exception

		- Modifying arguments Object
			function () {
				arguments = []; 				// exception
			}

### Iteration ###
	// for...in returns the key not the value
	var a = ["one", "two", "three"];
	for (var o in a) {
		console.log(o);			// 0, 1, 2 ...
		console.log(a[o]);		// "one", "two", "three" ...
	}

	// associative array
	var b = {'one':'first item', 'two':'second item', 'three':'third item'};
	for (var o in b) {
		console.log(o);			// "one", "two", "three" ...
		console.log(b[o]);		// "first item", "second item", "third item" ...
	}

	Note: Above 'for (var o in b)' loop in JavaScript is equivalent to 'for (var o = 0; o < b.length; o++)'

### Passing Objects ###
	// C# way
	var srv = new SmtpClient();
	var msg = new MailMessage("shawn@foo.com", "shawn@foo.com");
	msg.body = "Hello";
	msg.subject = "Test Msg";
	svr.Send(msg);

	// JavaScript way
	var srv = new SmtpClient();
	var msg = {
		"to": "shawn@foo.com",
		"from": "shawn@foo.com",
		"body": "Hello",
		"subject": "Test Msg"
	};	// define structure of the data to be sent	
	svr.Send(msg);

### Implementing default properties ###
	function SmtpClient() {
	};

	SmtpClient.prototype.send = function(msg) {
		if (!msg.hasOwnProperty("to")) {
			msg.to = "shawn@foo.com";
		}
		...
	};

	// jQuery way
	SmtpClient.prototype.send = function(msg) {
		var defaults = {
			to: "shawn@foo.com",
			mailServer: "smtp.foo.com"
		};

		$.extend(defaults, msg);
		var to = defaults.to;
	};

	Note: The ‘prototype’ property points to the object that will be asigned as the prototype of instances 
	      created with that function when using ’new’.

### Handle Events ###
	// passing callback is more common
	svr.send({
		"from": "shawn@foo.com",
		"body": "Hello",
		"subject": "Test Msg",
		complete: function(r) {
			console.log("Success: " + r);
		},
		error: function(e) {
			console.log("Failed: " + e);
		}
	});

### Architecture Large JavaScript CodeBases ###
#### Build for Coexistence ####
	// Isolate Scripts with Namespaces
	(function (ns) {
		ns.Customer = function(name) {
			this.name = name
		};
	}(window.myNamespace = window.myNamespace || {})); 

	(function (ns) {
		ns.Order = function(id, name) {
			this.id = id;
			this.customer = new ns.Customer(name);
		};
	}(window.myNamespace = window.myNamespace || {})); 
	
	var o = new myNamespace.Order(1, "A Customer");
	console.log(o.id);
	console.log(o.customer.name);
	
#### Require.js ####
	- Uses Asynchronous Module Definition (AMD) pattern
	- Implements Dependency Injection for JavaScript
	- Load Scripts as they are needed instead of all at start

	// Include startup scripts (in this case js/main.js)
    <script data-main="js/main.js" src="js/vendor/requirejs/require.js"></script>

	// Main.js
	require(["Order"],			// requires Customer Module
		function (Customer) {		// called with required Module(s)
			var o = new Order(1, "A Customer");
			console.log(o.id);
			console.log(o.customer.name);
		}
	);

	// Order.js
	define(["Customer"],			// required script (Customer)
		function (Customer) {		// get any requred modules like in Main.js
			function Order(id, name) {
				this.id = id;
				this.customer = new Customer(name);
			}
			return Order;			// return the object that Requires
		}
	);

	// Customer.js
	define([],						// required script (None)
		function () {				// get any requred modules like in Main.js
			function Customer(name) {
				this.name = name;
			}
			return Customer;		// return the object that Requires
		}
	);

### "Compiling" JavaScript ###
	- JSLint to Check for Correctness
	- Minification for Packaging

	Tips:
		- ASP.NET MVC 4 Support Packaging (other solutions SquishIt, Cassette and Chirpy)
		- JSLint Add-In for Visual Studio (http://jslint4vs2010.codeplex.com/)

# C\# #
### Object Initializer ###
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

### Anonymous Types ###
	var cust = new {
		Name = "Shawn",
		CompanyName" = "Wilder Minds",
		Address = new {
			StreetAddress = "123 Main Street",
			...
		}
		...
	}

### .Net, dynamic + ExpandoObject ###
	dynamic foo = new ExpandoObject()
	foo.Name = "Shawn";	// add member on the fly

# Related articles #
- [JSON: serialize and deserialize functions in JavaScript](http://www.kristofdegrave.be/2012/07/json-serialize-and-deserialize.html)

# Other articles #
- [Quick Tip: Quick and Easy JavaScript Testing with “Assert”](http://net.tutsplus.com/tutorials/javascript-ajax/quick-tip-quick-and-easy-javascript-testing-with-assert/)
- [propertyIsEnumerable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable)
- [A RequireJS, Backbone, and Bower Starter Template](http://net.tutsplus.com/tutorials/javascript-ajax/a-requirejs-backbone-and-bower-starter-template/)
- [REQUIREJS API](http://requirejs.org/docs/api.html#jsfiles)
- [JavaScript Associative Arrays Demystified](http://blog.xkoder.com/2008/07/10/javascript-associative-arrays-demystified/)
- [Objects as associative arrays](http://www.quirksmode.org/js/associative.html)
- [A Plain English Guide to JavaScript Prototypes](http://sporto.github.io/blog/2013/02/22/a-plain-english-guide-to-javascript-prototypes/)

# About the Author #

[Shawn Wildermuth](http://wildermuth.com/) is a seven-time book author, a nine-time Microsoft MVP, member of a number of Microsoft "Insider" groups as well as an internationally recognized speaker on a variety of technologies.