var e = module.exports = {};

e.init = () => {

};
e.requireCtx = require;

e.isCommand = true;
e.hidden = false;
e.usage = 'exit';
e.info = 'Quits ElectronCTL';
e.longinfo = '<p>Quits ElectronCTL</p>';

e.execute = (input, args, document) => {
  window.close();
};
