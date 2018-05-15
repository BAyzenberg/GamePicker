const picker = require('randomPicker.js');

module.exports = exports;

exports.findCommand = function(message) {
  let split = message.split(' ');
  let command = split.shift();
  let content = split;
  return {
    command,
    content,
  };
};

exports.runCommand = function(message) {
  switch (message.command) {
  case 'test': message.reply('response');
    break;
  case 'pick': message.reply(picker.pickGame(message.content));
    break;
  default: message.reply('command not recognized');

  }
};
