var e = module.exports = {};

e.init = () => {

};
e.requireCtx = require;

e.isCommand = true;
e.hidden = false;
e.usage = 'ping';
e.info = 'Pong!';
e.longinfo = '<p>Pong!</p><p>Find the command latency.</p>';

e.execute = (input, args, document) => {
  printToCLI("Pong!")
};
