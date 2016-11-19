var fs = require("fs")
const path = require('path')

const appData = require('../package.json');
const exec = require('child_process').exec;

initCommands();

function initCommands() {
    var fileArray = fs.readdirSync(path.join(__dirname, 'cmds'));
    for (var i = 0; i < fileArray.length; i++) {
        var commandFile = fileArray[i];
        if (/.+\.js$/.test(commandFile)) {
            var commandName = commandFile.match(/(.+)\.js$/)[1];
            loadCommand(commandName);
            console.log(`${i < 10 ? ' ' : ''}${i}.`, 'Loading command module ', commandName);
        } else {
            console.warn('     Skipping non-command ', commandFile);

        }
    }
}

function loadCommand(commandName) {
    commands[commandName] = require(`./cmds/${commandName}.js`);
    if (commands[commandName].isCommand) {
        buildCommand(commandName);
    } else {
        console.warn('     Skipping non-command ', commandName + '.js');
    }
}

function buildCommand(commandName) {
    try {
        commands[commandName].init();
        var command = {
            name: commandName,
            usage: commands[commandName].usage,
            info: commands[commandName].info,
            hidden: commands[commandName].hidden,
            category: commands[commandName].category
        };
        if (commands[commandName].sub) {
            for (var subCommand in commands[commandName].sub) {
                console.log(`    Loading ${commandName}'s subcommand`, subCommand);

                commandList[subCommand] = {
                    name: commandName,
                    usage: commands[commandName].sub[subCommand].usage,
                    info: commands[commandName].sub[subCommand].info,
                    hidden: commands[commandName].hidden,
                    category: commands[commandName].category
                };
            }
        }
        commandList[commandName] = command;
        if (commands[commandName].alias) {
            for (var ii = 0; ii < commands[commandName].alias.length; ii++) {
                console.log(`    Loading ${commandName}'s alias`, commands[commandName].alias[ii]);
                commandList[commands[commandName].alias[ii]] = command;
            }
        }
    } catch (err) {
        console.err(err);
    }
}

global.printToCLI = function(output) {
  var buffer = document.getElementById("buffer").innerHTML
  var input = document.getElementById("inputMain").value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
  document.getElementById("buffer").innerHTML = buffer + "<span>" +rprompt + input + "</span><br><span>" + output + "</span><br>\n"
}

global.appendToCLI = function(output) {
  var buffer = document.getElementById("buffer").innerHTML
  var input = document.getElementById("inputMain").value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
  document.getElementById("buffer").innerHTML = buffer + "<br>" + output + "\n"
}

global.errToCLI = function(output) {
  var buffer = document.getElementById("buffer").innerHTML
  var input = document.getElementById("inputMain").value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
  document.getElementById("buffer").innerHTML = buffer + "<span>" +rprompt + input + "</span><br><span class=\"error\">" + output + "</span><br><br>\n"
}

function run() {
  var input = document.getElementById("inputMain").value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
  var args = input.split(" ")
  if(args[0] = ""){
  try{
    commands[args[0].toLowerCase()].execute(input, args, document);
  } catch(err) {
    if(err = "TypeError: Cannot read property 'execute' of undefined"){
      printToCLI("Command not found. Type \"help\" for a list of commands. " + err )
    } else {
      errToCLI("There was an error running that command:<br>" + err)
    }
  }
  }
  else {
    var buffer = document.getElementById("buffer").innerHTML
    document.getElementById("buffer").innerHTML = buffer +rprompt + "<br>"
  }
  document.getElementById('inputMain').scrollIntoView();
  document.getElementById("inputMain").value = ""
}
