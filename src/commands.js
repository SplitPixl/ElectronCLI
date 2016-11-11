module.exports = {
	run(input) {
    var cinput = input.toLowerCase();
    switch (cinput) {
		case "ping":
			return "Pong!";
		break;
		case "about":
			return "ElectronCLI is a Command-Line interface built from Electron.<br>ElectronCLI was (and currently is being) developed by MattSilverblood and SplitPixl.";
		break;
		default:
			return "Invalid syntax! Type \"help\" for infomation on how to use ElectronCLI."
	}
	}
};
