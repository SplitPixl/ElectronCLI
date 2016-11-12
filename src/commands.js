const appData = require('../package.json');
const exec = require('child_process').exec;

module.exports = {
	run(input, document) {
    document = document
    var cinput = input.toLowerCase();
	  let args = cinput.split(' ');
    let argstring = args.slice(1).join(" ");
    switch (args[0]) {

		// Small Commands
		case "ping":
			printToCLI("Pong!");
		break;

		case "8ball":
			let ballresp = require('./ballresp.json');
			let determine = ((Math.random() * (ballresp.length - 1) + 1).toFixed(0) - 1);
			printToCLI("<br>Oh, interesting question. The 8ball's response is <u>" + ballresp[determine] + "</u>.");
		break;

		case "clear":
			document.getElementById("buffer").innerHTML = "";
		break;

		case "about":
			printToCLI("ElectronCLI is a Command-Line interface built from Electron.<br>ElectronCLI was (and currently is being) developed by " + appData.author + ".");
		break;

		case "eval":
			printToCLI(eval(argstring));
		break;

		case "exec":
			exec(argstring, (error, stdout, stderr) => {
				printToCLI("<br>" + stdout.replace("\n", "<br>") + stderr)
			})
		break;

		case "exit":
			window.close();
		break;


		// Large Commands

		case "help":
		let commands = [
			"You are using ElectronCLI v" + appData.version + ", created by " + appData.author + ".<br><br><strong><u>Commands:</u></strong><br><br>",
			"8ball - Let the 8 ball decide!",
			"about - More information on ElectronCLI.",
			"ping - Pong!"
		]
		printToCLI(commands.join("<br>"));
		break;

		// End of commands
    case "":
      var buffer = document.getElementById("buffer").innerHTML
      document.getElementById("buffer").innerHTML = buffer + prompt + "<br>"
    break;

		default:
			printToCLI("Invalid syntax! Type \"help\" for infomation on how to use ElectronCLI.");
	}
  function printToCLI(output) {
    var buffer = document.getElementById("buffer").innerHTML
    document.getElementById("buffer").innerHTML = buffer + prompt + input + "<br>" + output + "<br><br>"
  }
  }
};
