var e = module.exports = {};

var commandList = []

e.init = () => {

};
e.requireCtx = require;

e.isCommand = true;
e.hidden = false;
e.usage = 'help';
e.info = 'Shows this text.';
e.longinfo = '<p>Pong!</p><p>Find the command latency.</p>';

e.execute = (input, args, document) => {
  var commandList = ['<u>Commands:</u><br>']
  for (var command in commands) {
    if (!commands[command].hidden) {
      commandList.push(commands[command].usage + "<br>" + commands[command].info + "<br>");
    }
  }
  printToCLI(commandList.join("<br>"))
};
