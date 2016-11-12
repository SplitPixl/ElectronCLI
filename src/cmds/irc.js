var e = module.exports = {};
var ircClient = require('node-irc');

e.init = () => {

};
e.requireCtx = require;

e.isCommand = true;
e.hidden = false;
e.usage = '';
e.info = 'Send Text message to IRC.';
e.longinfo = '<p>Send Text message to IRC.</p>';

e.execute = (input, args) => {
    var client = new ircClient('irc.freenode.net', 6667, 'SilverBot', 'SilverBot');
    client.connect()
    client.on('ready', function () {
        client.join('#electroncli');
        client.say('#electroncli', 'When the command works just right.');
    });
};
