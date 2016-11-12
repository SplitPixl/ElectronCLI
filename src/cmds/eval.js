var e = module.exports = {};

e.init = () => {

};
e.requireCtx = require;

e.isCommand = true;
e.hidden = false;
e.usage = 'eval [Node.js Code]';
e.info = 'Evaluates code for you,';
e.longinfo = '<p>Evaluates code for you./p>';

e.execute = (input, args, document) => {
  var rawinput = document.getElementById("inputMain").value.substring(5)
  try{
    printToCLI(eval(rawinput));
  } catch(err) {
    errToCLI(err);
  }
};
