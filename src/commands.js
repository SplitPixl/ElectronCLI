module.exports = {
	run(input) {
    var cinput = input.toLowerCase();
	let args = cinput.split(' ');
    switch (cinput) {
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
			return "ElectronCLI is a Command-Line interface built from Electron.<br>ElectronCLI was (and currently is being) developed by MattSilverblood and SplitPixl.";
		break;
		default:
			return "Invalid syntax! Type \"help\" for infomation on how to use ElectronCLI."
	}
	}
};
