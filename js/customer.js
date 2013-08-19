// http://joquery.com/2012/string-format-for-javascript
String.format = function() {
    // The string containing the format items (e.g. "{0}")
    // will and always has to be the first argument.
    var theString = arguments[0];
    
    // start with the second argument (i = 1)
    for (var i = 1; i < arguments.length; i++) {
        // "gm" = RegEx options for Global search (more than one instance)
        // and for Multiline search
        var regEx = new RegExp("\\{" + (i - 1) + "\\}", "gm");
        theString = theString.replace(regEx, arguments[i]);
    }
    
    return theString;
}

// JavaScript way of mimic classes
function Customer(name, company) {
	// public properties
	this.name = name;
	this.company = company;

	// private properties
	var fmt = "Customer: {0} ({1})";

	// check also https://github.com/alexei/sprintf.js for bower and node.js
	this.getInfo = function() {
		return String.format(fmt, this.name, this.company.toUpperCase()); 
	}
}


function Author(first_name, last_name) {
    var _first_name = first_name;
    var _last_name = last_name;

    Object.defineProperty(this, 
        "first_name", 
        {get: function() {return _first_name;}}
    );
    
    Object.defineProperty(this, 
        "last_name", 
        {
            get: function() {return _last_name;}, 
            set: function(value) {_last_name = value;}
        }
    );

    this.getFullName = function() {return _last_name.toUpperCase() + ", " + _first_name};
}

Author.country = 'England';    //define static property