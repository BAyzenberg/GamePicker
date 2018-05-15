const Discord = require('discord.js');
const client = new Discord.Client();
const picker = require('randomPicker.js');
require('dotenv');

client.on('message', message => {
  let object = checkCommand(message);
  if(object.command == 'test') message.reply('response');
  if(object.command == 'pick') message.reply(picker.pickGame(object.content));
});

function checkCommand(message) {
  let split = message.split(' ');
  let command = split.shift();
  let content = split;
  return {
    command,
    content,
  };
}

client.login(process.env.BOT_SECRET);
