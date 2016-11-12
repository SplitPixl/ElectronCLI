var e = module.exports = {};
const BrowserWindow = require('electron').remote.BrowserWindow
const path = require('path')

e.init = () => {

};
e.requireCtx = require;

e.isCommand = true;
e.hidden = false;
e.usage = '';
e.info = 'Send Text message to IRC.';
e.longinfo = '<p>Send Text message to IRC.</p>';

e.execute = (input, args) => {
  const modalPath = path.join('file://', __dirname, '/helpers/irc/irc.html')
  let win = new BrowserWindow({ width: 400, height: 320, frame: false })
  win.on('close', function () { win = null })
  win.loadURL(modalPath)
  win.show()
  printToCLI("Irc client started.")
};
