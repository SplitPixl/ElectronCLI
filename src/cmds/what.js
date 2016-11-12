var e = module.exports = {};
const BrowserWindow = require('electron').remote.BrowserWindow

e.init = () => {

};
e.requireCtx = require;

e.isCommand = true;
e.hidden = true;
e.usage = 'what';
e.info = 'What is this?';
e.longinfo = '<p>???</p>';

e.execute = (input, args, document) => {
    let win = new BrowserWindow({ width: 400, height: 320 })
    win.on('close', function () { win = null; alert("dont do that") })
    win.loadURL("https://splitpixl.xyz/splart")
    win.show()
    printToCLI("")
};
