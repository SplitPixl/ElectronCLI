var e = module.exports = {};

var exec = require('child_process').exec;

e.init = () => {

};
e.requireCtx = require;

e.isCommand = true;
e.hidden = false;
e.usage = 'exec [Shell Code]';
e.info = 'Runs shell commands.';
e.longinfo = '<p>Runs shell commands./p>';

e.execute = (input, args, document) => {
  var rawinput = document.getElementById("inputMain").value.substring(5)
  exec(rawinput, function(err, stdout, stderr) {
    if(err){
      errToCLI(err);
    }
    if(stderr){
      errToCLI(stderr);
    }
    else {
      printToCLI(stdout)
    }
  }
};
