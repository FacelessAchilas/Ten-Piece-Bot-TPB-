const Discord = require('discord.js');
const bot = new Discord.Client();
//////////////////////////////////////////////////////////////////////////
var rarities = Array("common", "common", "common", "common", "common", "common", "uncommon",  "uncommon", "uncommon", "rare")
var commonfruits = Array("Sube Sube no Mi", "Ushi Ushi no Mi", "Tori Tori no Mi (Normal zoan)", "Doru Doru no Mi", "Baku Baku no Mi", "Mane Mane no Mi", "Supa Supa no Mi", "Noro Noro no Mi", "Awa Awa no Mi", "Beri Beri no Mi", "Shari Shari no Mi", "Suke Suke no Mi", "Mogu Mogu no Mi", "Uma Uma no Mi", "Zou Zou no Mi", "Ushi Ushi no Mi", "Numa Numa no Mi", "Nagi Nagi no Mi", "Kuku Kuku no Mi", "Tama Tama no Mi", "Ato Ato no Mi", "Buku Buku no Mi", "Mato Mato no Mi", "Memo Memo no Mi", "Mira Mira no Mi", "Oshi Oshi no Mi", "Pero Pero no Mi", "Fuku Fuku no Mi", "Guru Guru no Mi", "Nui Nui no Mi", "Jake Jake no Mi", "Juku Juku no Mi", "Sui Sui no Mi", "Horu Horu no Mi", "Kame Kame no Mi", "Uma Uma no Mi", "Hebi Hebi no Mi", "Hito Hito no Mi (Normal zoan)")
var uncommonfruits = Array("Inu Inu no Mi", "Goe Goe no Mi", "Bara Bara no Mi", "Kilo Kilo no Mi", "Ori Ori no Mi", "Bane Bane no Mi", "Doa Doa no Mi", "Sabi Sabi no Mi", "Hiso Hiso no Mi", "Kama Kama no Mi", "Kachi Kachi no Mi", "Bazooka Bazooka no Mi", "Toro Toro no Mi", "Ame Ame no Mi", "Beta Beta no Mi", "Fuwa Fuwa no Mi", "Mochi Mochi no Mi", "Bisu Bisu no Mi", "Bata Bata no Mi", "Buki Buki no Mi", "Mero Mero no Mi", "Giro Giro no Mi", "Chiyu Chiyu no Mi", "Hira Hira no Mi", "Wara Wara no Mi", "Ishi Ishi no Mi", "Hobi Hobi no Mi", "Ton Ton no Mi", "Woshu Woshu no Mi")
var rarefruits = Array("Gomu Gomu no Mi", "Mera Mera no Mi", "Hana Hana no Mi", "Bomu Bomu no Mi", "Toge Toge no Mi", "Sara Sara no Mi", "Moku Moku no Mi", "Suna Suna no Mi", "Goro Goro no Mi", "Hie Hie no Mi", "Pika Pika no Mi", "Gasu Gasu no Mi", "Yuki Yuki no Mi", "Tori Tori no Mi (Mythical zoan)", "Magu Magu no Mi", "Yomi Yomi no Mi", "Kage Kage no Mi", "Horo Horo no Mi", "Yami Yami no Mi", "Toki Toki no Mi", "Ope Ope no Mi", "Soru Soru no Mi", "Ito Ito no Mi", "Goru Goru no Mi", "Shibo Shibo no Mi", "Bari Bari no Mi", "Doku Doku no Mi", "Pamu Pamu no Mi", "Nikyu Nikyu no Mi", "Shiro Shiro no Mi", "Hoya Hoya no Mi", "Meta Meta no Mi", "Zuma Zuma no Mi", "Hito Hito no Mi (Mythical zoan)", "Magnet Magnet no Mi (Kid's fruit)")
//////////////////////////////////////////////////////////////////////////
var islandfruit = Array("No", "No", "No", "No","No", "No", "No", "Yes", "Yes", "Yes")
//////////////////////////////////////////////////////////////////////////

bot.on('message', function(message){
    if(message.content == "ten!RandomFruit")
    {
        var rarity = rarities[Math.floor(Math.random()*rarities.length)];

        
        if(rarity == "common")
        {
         var fruit = commonfruits[Math.floor(Math.random()*commonfruits.length)]
          message.channel.send("<@!"+message.author.id + "> "+ "has obtained the " + rarity + " " + fruit)
        }
    
        if(rarity == "uncommon")
        {
          var fruit = uncommonfruits[Math.floor(Math.random()*uncommonfruits.length)]
           message.channel.send("<@!"+message.author.id + "> "+ "has obtained the " + rarity + " " + fruit)
        }
        
        if(rarity == "rare")
        {
         var fruit = rarefruits[Math.floor(Math.random()*rarefruits.length)]
          message.channel.send("<@!"+message.author.id + "> "+ "has obtained the " + rarity + " " + fruit)
        }
    }


    if(message.content == "ten!IslandFruit")
    {

        var doornot = islandfruit[Math.floor(Math.random()*islandfruit.length)];

        if(doornot == "Yes")
        {
            var rarity = rarities[Math.floor(Math.random()*rarities.length)];

        
            if(rarity == "common")
            {
             var fruit = commonfruits[Math.floor(Math.random()*commonfruits.length)]
             message.channel.send("A " + rarity + " " + "`" + fruit + "`" + " has spawned on the island!")
            }
        
            if(rarity == "uncommon")
            {
              var fruit = uncommonfruits[Math.floor(Math.random()*uncommonfruits.length)]  
              message.channel.send("A " + rarity + " " + "`" + fruit + "`" + " has spawned on the island!")
            }
            
            if(rarity == "rare")
            {
             var fruit = rarefruits[Math.floor(Math.random()*rarefruits.length)]
             message.channel.send("A " + rarity + " " + "`" + fruit + "`" + " has spawned on the island!")
            }           
        } 
        else
        {  
            message.channel.send("No fruit spawned on this island.")
        }

    }


    if(message.content == "Lime shut up")
    {
        message.channel.send("Yeah bro")
    }

    if(message.content == "bigpoopoo")
    {
        message.channel.send("IM POOPING EVERYWHERE!!!!!!!")
    }

    if(message.content == "!angry")
    {
     message.channel.send("https://i.gifer.com/5tth.gif")   
    }
});

bot.on('ready', function(){
    console.log("Ready");
});

bot.login(process.env.BOT_TOKEN)
