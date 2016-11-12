var e = module.exports = {};
const convert = require('convert-units');

e.init = () => {

};
e.requireCtx = require;

e.isCommand = true;
e.hidden = false;
e.usage = 'convert [Amount] [Unit] to [Unit]';
e.info = 'Convert any units.';
e.longinfo = '<p>Convert both digital and physical units.</p>';

e.execute = (input, args) => {
    if (args.length <= 1) {
        errToCLI("You need to supply units to convert.<br>Example: convert [Amount] [Unit] (to) [Unit].");
    } else {
        try {
            let converter = convert(args[1]).from(args[2]).to(args[3]);
            printToCLI("[Converter] Converting your units...<br>[Converter] " + args[1] + args[2] + " to " + args[3] + " is " + converter + args[3]);
        }catch(err) {
            errToCLI("An error occured trying to process your request.<br>Please make sure you have all the required dependancies installed and that your supplied info was correct.");
        }
    }
};
