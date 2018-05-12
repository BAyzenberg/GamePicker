const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv');

client.on('message', message => {
  if(message.content == 'test') message.reply('response');
});

client.login(process.env.BOT_SECRET);
