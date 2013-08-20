// example of handling events
function Svr() {
}
Svr.prototype.send = function(msg) {
	if (!msg.hasOwnProperty("to")) {
		msg.to = "shawn@foo.com";
	}
	msg.complete("A message to '" + msg.to + "' is sent.");
};