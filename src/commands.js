const appData = require('../package.json');

module.exports = {
	run(input) {
    var cinput = input.toLowerCase();
	let args = cinput.split(' ');
    switch (args[0]) {
		
		// Small Commands
		case "ping":
			return "Pong!";
		break;
		
		case "8ball":
			let ballresp = require('./ballresp.json');
			let determine = ((Math.random() * (ballresp.length - 1) + 1).toFixed(0) - 1);
			return "<br>Oh, interesting question. The 8ball's response is <u>" + ballresp[determine] + "</u>.";
		break;
		
		case "clear":
			return "Matt was told to make this command, he failed miserably.";
		break;
		
		case "about":
			return "ElectronCLI is a Command-Line interface built from Electron.<br>ElectronCLI was (and currently is being) developed by " + appData.author + ".";
		break;
		
		case "eval":
			let argstring = args.slice(1).join(" ");
			return eval(argstring);
		break;
		
		// Large Commands
		
		case "help":
			return "You are using ElectronCLI v" + appData.version + ", created by " + appData.author + ".<br><br><strong><u>Commands:</u></strong><br><br>" + 
			"8ball - Let the 8 ball decide!<br>" +
			"about - More information on ElectronCLI.<br>" + 
			"ping - Pong!";
		break;
		
		// End of commands
		
		default:
			return "Invalid syntax! Type \"help\" for infomation on how to use ElectronCLI.";
	}
	}
};
