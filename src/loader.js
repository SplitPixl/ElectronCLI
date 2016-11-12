(function (exports, require, module, __filename, __dirname, process, global) { var fs = require("fs")
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
  document.getElementById("buffer").innerHTML = buffer + "<span>" + prompt + input + "</span><br><span>" + output + "</span><br><br>\n"
}

global.errToCLI = function(output) {
  var buffer = document.getElementById("buffer").innerHTML
  var input = document.getElementById("inputMain").value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
  document.getElementById("buffer").innerHTML = buffer + "<span>" + prompt + input + "</span><br><span class=\"error\">" + output + "</span><br><br>\n"
}

});
