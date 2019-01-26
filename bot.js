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
var happygifs = Array("https://pa1.narvii.com/6422/812ba248dbfa95b26e0f1ecf9a9225a0246b1de7_hq.gif", "http://pa1.narvii.com/6362/97c3c606fbbbf6aebca68ab9fc35e6651bfcde85_hq.gif", "https://68.media.tumblr.com/c38e5421161ed8044b5e7dd15c98af7a/tumblr_olz9e6ojmS1t1yvcko7_400.gif", "https://pa1.narvii.com/5868/27b870f91df164ede0957d8f4e3faa5cdd36b571_hq.gif", "https://media.giphy.com/media/MXTbbhZNM0zo4/giphy.gif")
var angrygifs = Array("https://i.gifer.com/5tth.gif", "https://i.kym-cdn.com/photos/images/original/001/143/091/22f.gif", "https://pa1.narvii.com/6381/b4930df8aeef4cc3fb56ed5b102b8310d04349c6_hq.gif", "https://i.gifer.com/3YIe.gif")
var hotgifs = Array("https://i.gifer.com/JScV.gif", "https://media.giphy.com/media/BpbwDqD5r2HeM/giphy.gif", "https://i.makeagif.com/media/9-29-2015/jkUBGB.gif", "https://66.media.tumblr.com/8931059debd73252b3dd2da684aa2d01/tumblr_ookp6oRbF61su5a4po8_r1_400.gif", "https://i.gifer.com/46X0.gif", "http://66.media.tumblr.com/17dea2505d84f4a356214548b1556964/tumblr_ntvrej94ME1tp5yuio1_500.gif", "https://pa1.narvii.com/6576/4b7ac6ac63f371cffc2a621ed0d1507d133bb690_hq.gif", "https://i.pinimg.com/originals/4a/bf/8e/4abf8ece201ea2302dc31593d0f50039.gif")
var sadgifs = Array("https://media.giphy.com/media/YbDQYrSihr584/giphy.gif", "https://66.media.tumblr.com/c323cd123a039a2f2dfd92ff64688b85/tumblr_mpun6fP1Fa1speqruo1_500.gif", "https://media.giphy.com/media/CB5jiL6R3zzJm/giphy.gif", "https://media.giphy.com/media/RdJzquHQceMKlMwrg2/giphy.gif")
//////////////////////////////////////////////////////////////////////////
var akidescription = `Aki Aki [Age:19 | Gender:Female]
Aki was lonely as a child, so she got angry and started yelling. Her mom decided to lecture her in the best way - cut her in multilpe locations and give her 3 huge scars. Turns out it wasn't her mom cutting her, it was the sword! So she took the sword and killed an entire city at age 14. AGE 14 THE FUCK LEOREXBAZOOKA KID`
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
     var emote = angrygifs[Math.floor(Math.random()*angrygifs.length)]
     message.channel.send(emote) 
    }
    if(message.content == "!happy")
    {
     var emote = happygifs[Math.floor(Math.random()*happygifs.length)]
     message.channel.send(emote) 
    }
        if(message.content == "!hot")
    {
     var emote = hotgifs[Math.floor(Math.random()*hotgifs.length)]
     message.channel.send(emote) 
    }
        if(message.content == "!sad")
    {
     var emote = sadgifs[Math.floor(Math.random()*sadgifs.length)]
     message.channel.send(emote) 
    }
    
    if(message.content == "ten!Character: Aki")
    {
        message.channel.send(akidescription)
    }
});

bot.on('ready', function(){
    console.log("Ready");
});

bot.login(process.env.BOT_TOKEN)
