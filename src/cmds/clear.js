var e = module.exports = {};

e.init = () => {

};
e.requireCtx = require;

e.isCommand = true;
e.hidden = false;
e.usage = 'clear';
e.info = 'Clears the buffer';
e.longinfo = '<p>Clears the command buffer</p>';

e.execute = (input, args, document) => {
  document.getElementById("buffer").innerHTML = "";
};
