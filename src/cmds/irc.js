var e = module.exports = {};
const BrowserWindow = require('electron').remote.BrowserWindow
const path = require('path')

e.init = () => {

};
e.requireCtx = require;

e.isCommand = true;
e.hidden = false;
e.usage = 'irc';
e.info = 'Send Text message to IRC.';
e.longinfo = '<p>Send Text message to IRC.</p>';

e.execute = (input, args) => {
  const modalPath = path.join('file://', __dirname, '/helpers/irc/irc.html')
  let win = new BrowserWindow({ width: 1024, height: 768, frame: false, backgroundColor: '#1B1A1F' })
  win.on('close', function () { win = null })
  win.loadURL(modalPath)
  win.show()
  printToCLI("Irc client started.")
};
