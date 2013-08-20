requirejs.config({
	baseUrl: 'js'
});

requirejs(['support', 'support_ns', 'customer', 'svr'],
function() {
	console.log("%cmain.js", "font-size: large; color: red");

	DoIt();
	supportNs.DoIt();	// cal DoIt from supportNs namespace

	console.group("%cFunction object", "font-size: large; color: blue");
		console.log("foo.length => " + foo.length);
		console.log("foo.name => " + foo.name);
		console.log("foo.toString() => " + foo.toString());
	console.groupEnd();

	console.group("%c'this' Object", "font-size: large; color: blue");
		var obj = {name: "myObj", myFunc: function(){return this.name}};
		console.log('var obj = ' + JSON.stringify(obj, function (key, value) {
				if (typeof value === 'function') {return value.toString();}
				return value;
			}));
		console.log("obj.myFunc() => " + obj.myFunc());
	console.groupEnd();

	console.group("%cCustomer", "font-size: large; color: blue");
		var cust = new Customer("Shawn", "Wilder Minds");
		info = cust.getInfo();
		console.log(info);
	console.groupEnd();

	console.group("%cAuthor", "font-size: large; color: blue");
	    var auth = new Author("Rachel", "Joyce");
	    console.log("Auhor: " + auth.getFullName());

	    auth.last_name = "Falk";
	    console.log("New name: " + auth.last_name);

	    // access static property
	    console.log(auth.last_name + ' lives in ' + Author.country);    // Note how the static property is accessed

	    console.log(auth.location());

	    // assert
	    console.assert(auth instanceof Author);
	    // console.assert(auth instanceof Customer);
	console.groupEnd();

	console.group("%cReflection", "font-size: large; color: blue");
		showProp(person);

		var prop = "age";
		if (hasProp(person, prop)) {
			console.log("Object has property named '" + prop + "'");

			// example of propertyIsEnumearable() function
			prop = "children";
			var msg = (person.propertyIsEnumerable(prop)) ? "" : "NOT ";
			console.log("Property '" + prop + "' is " + msg + "enumerable");
		} else {
			console.log("Object does NOT have property named '" + prop + "'");
		}
	console.groupEnd();

	console.group("%cExtension Methods", "font-size: large; color: blue");
		Array.prototype.calculateCount = function() {
			return this.length;
		}

		var a = ["one", "two"];
		console.log("Array: " + a);
		console.log("Length: " + a.calculateCount());
	console.groupEnd();

	console.group("%cEvents", "font-size: large; color: blue");
		var svr = new Svr();
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
	console.groupEnd();
});