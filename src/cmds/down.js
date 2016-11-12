var e = module.exports = {};
const isUp = require('is-up');

e.init = () => {

};
e.requireCtx = require;

e.isCommand = true;
e.hidden = false;
e.usage = 'down';
e.info = 'Check if a website is down.';
e.longinfo = '<p>Check if a website is down, quickly and easily.</p>';

e.execute = (input, args, document) => {
    // TODO: Add input pause, executing command doesn't show command executed in buffer, user can also type before results are returned.
    // Issue: Command results do not scroll window.
    if (args <= 1) {
        printToCLI("Please supply a website to check using `down [URL]`.");
    } else if (args >= 3) {
        printToCLI("Too many arguments! Please supply one website.")
    } else {
        try {
            isUp(args[1]).then(up => {
                if (up == true) {
                    printToCLI(args[1] + ` is up and reachable!`);
                } else {
                    errToCLI(args[1] + ` can't be accessed!`);
                }
            });
        }catch(err) {
            errToCLI(`There was an error trying to execute this command.<br>If you keep getting this error, check your internet connection.`);
        }
    }
};
