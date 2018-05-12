const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv');

client.on('message', message => {
  let object = checkCommand(message);
  if(object.command == 'test') message.reply('response');
});

function checkCommand(message) {
  let split = message.split(' ');
  let command = split.shift();
  let content = split.join(' ');
  return {
    command,
    content,
  };
}

client.login(process.env.BOT_SECRET);
