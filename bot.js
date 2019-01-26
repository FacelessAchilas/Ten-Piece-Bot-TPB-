const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', function(){
    console.log("Ready");
});

bot.login(process.env.BOT_TOKEN)
