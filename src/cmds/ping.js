var e = module.exports = {};

e.init = () => {

};
e.requireCtx = require;

e.isCommand = true;
e.hidden = false;
e.usage = 'ping';
e.info = 'Pong!\nFind the command latency.';
e.longinfo = '<p>Pong!</p><p>Find the command latency.</p>';

e.execute = (msg) => {
  printToCLI("Pong!")
};
