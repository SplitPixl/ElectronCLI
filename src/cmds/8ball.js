var e = module.exports = {};

e.init = () => {

};
e.requireCtx = require;

e.isCommand = true;
e.hidden = false;
e.usage = '8ball [stuff]';
e.info = 'Ask the 8ball';
e.longinfo = '<p>Ask the 8ball.</p>';

e.execute = () => {
  let ballresp = require('./ballresp.json');
  let determine = ((Math.random() * (ballresp.length - 1) + 1).toFixed(0) - 1);
  printToCLI("<br>Oh, interesting question. The 8ball's response is <u>" + ballresp[determine] + "</u>.");
};
