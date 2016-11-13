var e = module.exports = {};
const BrowserWindow = require('electron').remote.BrowserWindow
const path = require('path')

e.init = () => {

};
e.requireCtx = require;

e.isCommand = true;
e.hidden = false;
e.usage = 'test';
e.info = 'Test.';
e.longinfo = '<p>Test.</p>';

e.execute = (input, args) => {
  const modalPath = path.join('file://', __dirname, '/helpers/test/test.html')
  let win = new BrowserWindow({ fullscreen: true, frame: false })
  win.on('close', function () { win = null })
  win.loadURL(modalPath)
  win.show()
};
