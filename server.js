const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', message => {
  if(message.content == 'test') message.reply('response');
});

client.login('NDQ0OTAwNjA1MDgxODEzMDA1.Ddip_w.RnLW96SRnl-0hjzGga5FFmu_6cA');
