const appData = require('../package.json'),
			exec = require('child_process').exec;

module.exports = {
	run(input, document) {
    document = document
    var cinput = input.toLowerCase();
	  let args = cinput.split(' ');
    let argstring = args.slice(1).join(" ");
    
  	function printToCLI(output) {
    	var buffer = document.getElementById("buffer").innerHTML
    	document.getElementById("buffer").innerHTML = buffer +rprompt + input + "<br>" + output + "<br><br>"
  	}
  }
};
