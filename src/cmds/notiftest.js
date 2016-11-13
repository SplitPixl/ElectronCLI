var e = module.exports = {};

e.init = () => {

};
e.requireCtx = require;

e.isCommand = true;
e.hidden = false;
e.usage = 'notiftest';
e.info = 'Tests the Apeture Science Computer Notification Device.';

e.execute = (input, args, document) => {
  spawnNotification("Thank you for using the Apeture Science Computer Notification Device. This notification is to inform you that your test of the Apeture Science Computer Notification Device was successful. Goodbye.", "Apeture Science Computer Notification Device")
};

function spawnNotification(theBody,theTitle) {
  var options = {
      body: theBody,
  }
  var n = new Notification(theTitle,options);
}
