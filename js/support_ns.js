(function(ns) {
	ns.DoIt = function() {
		console.log("Namespace example: Hello from supportNs.DoIt() function!")
	};
})(window.supportNs = window.supportNs || {});