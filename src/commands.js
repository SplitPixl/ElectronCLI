module.exports = {
	run(input) {
    var cinput = input.toLowerCase();
    if(cinput === "ping") {
      return "Pong!";
    }
    else {
      return "Command not found."
    }
	}
};
