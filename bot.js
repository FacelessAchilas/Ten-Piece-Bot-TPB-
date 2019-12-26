const Discord = require('discord.js');
const bot = new Discord.Client();
//////////////////////////////////////////////////////////////////////////
var rarities = Array("common", "common", "common", "common", "common", "common", "uncommon",  "uncommon", "uncommon", "rare")
var commonfruits = Array("Kobu Kobu no Mi", "Sube Sube no Mi", "Ushi Ushi no Mi", "Doru Doru no Mi", "Baku Baku no Mi", "Mane Mane no Mi", "Supa Supa no Mi", "Noro Noro no Mi", "Awa Awa no Mi", "Beri Beri no Mi", "Shari Shari no Mi", "Suke Suke no Mi", "Mogu Mogu no Mi", "Uma Uma no Mi", "Zou Zou no Mi", "Ushi Ushi no Mi", "Numa Numa no Mi", "Nagi Nagi no Mi", "Kuku Kuku no Mi", "Tama Tama no Mi", "Ato Ato no Mi", "Buku Buku no Mi", "Mato Mato no Mi", "Memo Memo no Mi", "Mira Mira no Mi", "Oshi Oshi no Mi", "Pero Pero no Mi", "Fuku Fuku no Mi", "Guru Guru no Mi", "Nui Nui no Mi", "Jake Jake no Mi", "Juku Juku no Mi", "Sui Sui no Mi", "Horu Horu no Mi", "Kame Kame no Mi", "Uma Uma no Mi", "Hebi Hebi no Mi", "Hito Hito no Mi (Normal zoan)")
var uncommonfruits = Array("Tori Tori no Mi (Normal zoan)","Inu Inu no Mi", "Goe Goe no Mi", "Bara Bara no Mi", "Kilo Kilo no Mi", "Ori Ori no Mi", "Bane Bane no Mi", "Doa Doa no Mi", "Sabi Sabi no Mi", "Hiso Hiso no Mi", "Kama Kama no Mi", "Kachi Kachi no Mi", "Bazooka Bazooka no Mi", "Toro Toro no Mi", "Ame Ame no Mi", "Beta Beta no Mi", "Fuwa Fuwa no Mi", "Mochi Mochi no Mi", "Bisu Bisu no Mi", "Bata Bata no Mi", "Buki Buki no Mi", "Mero Mero no Mi", "Giro Giro no Mi", "Chiyu Chiyu no Mi", "Hira Hira no Mi", "Wara Wara no Mi", "Ishi Ishi no Mi", "Hobi Hobi no Mi", "Ton Ton no Mi", "Woshu Woshu no Mi")
var rarefruits = Array("Hito Hito no Mi (Normal zoan)","Gomu Gomu no Mi", "Mera Mera no Mi", "Hana Hana no Mi", "Bomu Bomu no Mi", "Toge Toge no Mi", "Sara Sara no Mi", "Moku Moku no Mi", "Suna Suna no Mi", "Goro Goro no Mi", "Hie Hie no Mi", "Pika Pika no Mi", "Gasu Gasu no Mi", "Yuki Yuki no Mi", "Tori Tori no Mi (Mythical zoan)", "Magu Magu no Mi", "Yomi Yomi no Mi", "Kage Kage no Mi", "Horo Horo no Mi", "Yami Yami no Mi", "Toki Toki no Mi", "Ope Ope no Mi", "Soru Soru no Mi", "Ito Ito no Mi", "Goru Goru no Mi", "Shibo Shibo no Mi", "Bari Bari no Mi", "Doku Doku no Mi", "Pamu Pamu no Mi", "Nikyu Nikyu no Mi", "Shiro Shiro no Mi", "Hoya Hoya no Mi", "Meta Meta no Mi", "Zuma Zuma no Mi", "Hito Hito no Mi (Mythical zoan)", "Magnet Magnet no Mi (Kid's fruit)")
//////////////////////////////////////////////////////////////////////////
var islandfruit = Array("No", "No", "No", "No","No", "No", "No", "Yes", "Yes", "Yes")
var weaponrarities = Array("c","c","c","c","c","c","c","c","c","c","c","c","u","u","u","u","u","u","u","r")
//////////////////////////////////////////////////////////////////////////
var happygifs = Array("https://pa1.narvii.com/6422/812ba248dbfa95b26e0f1ecf9a9225a0246b1de7_hq.gif", "http://pa1.narvii.com/6362/97c3c606fbbbf6aebca68ab9fc35e6651bfcde85_hq.gif", "https://68.media.tumblr.com/c38e5421161ed8044b5e7dd15c98af7a/tumblr_olz9e6ojmS1t1yvcko7_400.gif", "https://pa1.narvii.com/5868/27b870f91df164ede0957d8f4e3faa5cdd36b571_hq.gif", "https://media.giphy.com/media/MXTbbhZNM0zo4/giphy.gif")
var angrygifs = Array("https://i.gifer.com/5tth.gif","https://pa1.narvii.com/6381/b4930df8aeef4cc3fb56ed5b102b8310d04349c6_hq.gif", "https://i.gifer.com/3YIe.gif")
var hotgifs = Array("https://i.gifer.com/JScV.gif", "https://media.giphy.com/media/BpbwDqD5r2HeM/giphy.gif", "https://i.makeagif.com/media/9-29-2015/jkUBGB.gif", "https://66.media.tumblr.com/8931059debd73252b3dd2da684aa2d01/tumblr_ookp6oRbF61su5a4po8_r1_400.gif", "https://i.gifer.com/46X0.gif", "http://66.media.tumblr.com/17dea2505d84f4a356214548b1556964/tumblr_ntvrej94ME1tp5yuio1_500.gif", "https://pa1.narvii.com/6576/4b7ac6ac63f371cffc2a621ed0d1507d133bb690_hq.gif", "https://i.pinimg.com/originals/4a/bf/8e/4abf8ece201ea2302dc31593d0f50039.gif", "https://media.discordapp.net/attachments/381885960297906196/537540222930649098/image0.gif")
var sadgifs = Array("https://media.giphy.com/media/YbDQYrSihr584/giphy.gif", "https://66.media.tumblr.com/c323cd123a039a2f2dfd92ff64688b85/tumblr_mpun6fP1Fa1speqruo1_500.gif", "https://media.giphy.com/media/CB5jiL6R3zzJm/giphy.gif", "https://media.giphy.com/media/RdJzquHQceMKlMwrg2/giphy.gif")
//////////////////////////////////////////////////////////////////////////
var cmds = "```php\n [Commands]\n [1]ten!RandomFruit\n \n [2]ten!IslandFruit\n \n [3]ten!Random (Number)\n Selects a random number from one to what you have typed in.\n \n [4]!(Emotion)\n Posts a gif depending on what emotion you typed in (F.E. !happy).```"
var loveme = Array("No, you are stupid.","No, you are a disappointment.","No, you smell.","No, you're fat.","Yes! I love you XOXO","Yes! You're so cute!","Yes! If only I'd be real...","Go away, hoe","*Jojo reference*, that means no.","*One Piece reference*, that means yes.","You're in for a bumpy ride")
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

//Common  weapons
var Axe = "Axe: 1000K Beli | 10 Power Level"
var Cat_Claws = "Cat_claws: 2000k Beli | 20 Power Level"
var Kessui = "Kessui: 7500k Beli | 75 Power Level"
var Kashu = "Kashu: 5000K Beli | 50 Power Level"
var Shigure = "Shigure: 750K Beli | 75 Power Level"
var Bamboo = "Bamboo: 2000K Beli | 20 Power Level"
var Scimitar = "Scimitar: 1000K Beli | 10 Power Level"
var Mini_Terry = "Mini_Terry: 1000K Beli | 10 Power Level"
var Kogatana = "Kogatana: 7500K Beli | 75 Power Level"
var Kiribachi = "Kiribachi: 10,000K Beli | 100 Power Level"
var Flintlock = "Kiribachi: 1000K Beli | 0 Power Level | Gun"
var Revolver = "Kiribachi: 2500K Beli | 0 Power Level | Gun"

//Rare weapons
var Mogura = "Mogura: 50,000K Beli | 500 Power Level"
var Nanashaku_Jitte = "Nanashaku Jitte: 100,000K Beli | 1000 Power Level" 
var Wado_Ichimonji = "Wado_Ichimonji: 25,000K Beli | 200 Power Level"
var Shusui = "Shusui: 40,000K Beli | 400 Power Level"
var Nidai_Kitetsu = "Nidai_Kitetsu: 40,000K Beli | 400 Power Level"
var Sandai_Kitetsu = "Sandai_Kitetsu: 40,000K Beli | 400 Power Level"
var Pretzel = "Pretzel: 60,000K Beli | 600 Power Level"
var Gryphon = "Gryphon: 60,000K Beli | 600 Power Level"
var Kikoku = "Kikoku: 60,000K Beli | 600 Power Level"
var Durandal = "Durandal: 30,000K | 300 Power Level"
var Shirauo = "Shirauo: 30,000K | 300 Power Level"
var Rocket_Launcher = "Rocket_Launcher: 100,000K Beli | 10 Power Level | Gun"
var Seastone_Rifle = "Seastone_Rifle: 50,000K Beli | 10 Power Level | Gun"
var Dual_Walker = "Dual_Walker: 10,000K Beli | 0 Power Level | Gun"

//Stupid rare
var Yoru = "Yoru: 250,000K Beli | 3000 Power Level"
var Morakumogiri = "Morakumogiri: 250,000K Beli | 3000 Power Level"
var Funkfreed = "Funkfreed: 200,000K Beli | 2500 Power Level"

var CommonWeapons = Array(Axe,Cat_Claws,Kessui,Kashu,Shigure,Bamboo,Scimitar,Mini_Terry,Kogatana,Kiribachi,Flintlock,Revolver)
var RareWeapons = Array(Dual_Walker,Seastone_Rifle,Mogura,Nanashaku_Jitte,Wado_Ichimonji,Shusui,Nidai_Kitetsu,Sandai_Kitetsu,Pretzel,Gryphon,Kikoku,Durandal,Shirauo,Rocket_Launcher)
var SuperRareWeapons = Array(Yoru,Morakumogiri,Funkfreed)
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

bot.on('message', function(message){
    /////////
    if(message.content.startsWith("ten!ItemInfo Axe")){message.channel.send("<@!"+message.author.id + ">: " + Axe)}
    if(message.content.startsWith("ten!ItemInfo Cat_Claws")){message.channel.send("<@!"+message.author.id + ">: " + Cat_Claws)}
    if(message.content.startsWith("ten!ItemInfo Kessui")){message.channel.send("<@!"+message.author.id + ">: " + Kessui)}
    if(message.content.startsWith("ten!ItemInfo Kashu")){message.channel.send("<@!"+message.author.id + ">: " + Kashu)}
    if(message.content.startsWith("ten!ItemInfo Shigure")){message.channel.send("<@!"+message.author.id + ">: " + Shigure)}
    if(message.content.startsWith("ten!ItemInfo Bamboo")){message.channel.send("<@!"+message.author.id + ">: " + Bamboo)}
    if(message.content.startsWith("ten!ItemInfo Scimitar")){message.channel.send("<@!"+message.author.id + ">: " + Scimitar)}
    if(message.content.startsWith("ten!ItemInfo Mini_Terry")){message.channel.send("<@!"+message.author.id + ">: " + Mini_Terry)}
    if(message.content.startsWith("ten!ItemInfo Kogatana")){message.channel.send("<@!"+message.author.id + ">: " + Kogatana)}
    if(message.content.startsWith("ten!ItemInfo Kiribachi")){message.channel.send("<@!"+message.author.id + ">: " + Kiribachi)}
    if(message.content.startsWith("ten!ItemInfo Flintlock")){message.channel.send("<@!"+message.author.id + ">: " + Flintlock)}
    if(message.content.startsWith("ten!ItemInfo Revolver")){message.channel.send("<@!"+message.author.id + ">: " + Revolver)}
    
    if(message.content.startsWith("ten!ItemInfo Mogura")){message.channel.send("<@!"+message.author.id + ">: " + Mogura)}
    if(message.content.startsWith("ten!ItemInfo Nanashaku_Jitte")){message.channel.send("<@!"+message.author.id + ">: " + Nanashaku_Jitte)}
    if(message.content.startsWith("ten!ItemInfo Wado_Ichimonji")){message.channel.send("<@!"+message.author.id + ">: " + Wado_Ichimonji)}
    if(message.content.startsWith("ten!ItemInfo Shusui")){message.channel.send("<@!"+message.author.id + ">: " + Shusui)}
    if(message.content.startsWith("ten!ItemInfo Nidai_Kitetsu")){message.channel.send("<@!"+message.author.id + ">: " + Nidai_Kitetsu)}
    if(message.content.startsWith("ten!ItemInfo Sandai_Kitetsu")){message.channel.send("<@!"+message.author.id + ">: " + Sandai_Kitetsu)}
    if(message.content.startsWith("ten!ItemInfo Pretzel")){message.channel.send("<@!"+message.author.id + ">: " + Pretzel)}
    if(message.content.startsWith("ten!ItemInfo Gryphon")){message.channel.send("<@!"+message.author.id + ">: " + Gryphon)}
    if(message.content.startsWith("ten!ItemInfo Kikoku")){message.channel.send("<@!"+message.author.id + ">: " + Kikoku)}
    if(message.content.startsWith("ten!ItemInfo Durandal")){message.channel.send("<@!"+message.author.id + ">: " + Durandal)}
    if(message.content.startsWith("ten!ItemInfo Shirauo")){message.channel.send("<@!"+message.author.id + ">: " + Shirauo)}
    if(message.content.startsWith("ten!ItemInfo Rocket_Launcher")){message.channel.send("<@!"+message.author.id + ">: " + Rocket_Launcher)}
    if(message.content.startsWith("ten!ItemInfo Seastone_Rifle")){message.channel.send("<@!"+message.author.id + ">: " + Seastone_Rifle)}
    if(message.content.startsWith("ten!ItemInfo Dual_Walker")){message.channel.send("<@!"+message.author.id + ">: " + Dual_Walker)}
    
    if(message.content.startsWith("ten!ItemInfo Yoru")){message.channel.send("<@!"+message.author.id + ">: " + Yoru)}
    if(message.content.startsWith("ten!ItemInfo Morakumogiri")){message.channel.send("<@!"+message.author.id + ">: " + Morakumogiri)}
    if(message.content.startsWith("ten!ItemInfo Funkfreed")){message.channel.send("<@!"+message.author.id + ">: " + Funkfreed)}
    /////////
    if(message.content == "ten!ShopItem")
    {
        var rarity = weaponrarities[Math.floor(Math.random()*weaponrarities.length)];
        
        if(rarity == "c")
        {
          var weapon = RareWeapons[Math.floor(Math.random()*RareWeapons.length)]
          message.channel.send("<@!"+message.author.id + ">: " + weapon) 
        }
        
        if(rarity == "u")
        {
          var weapon = CommonWeapons[Math.floor(Math.random()*CommonWeapons.length)]
          message.channel.send("<@!"+message.author.id + ">: " + weapon) 
        }
        
        if(rarity == "r")
        {
          var weapon = SuperRareWeapons[Math.floor(Math.random()*SuperRareWeapons.length)]
          message.channel.send("<@!"+message.author.id + ">: " + weapon) 
        }
    }
    
    
    if(message.content == "ten!RandomFruit")
    {
        var rarity = rarities[Math.floor(Math.random()*rarities.length)];

        
        if(rarity == "common")
        {
         var fruit = commonfruits[Math.floor(Math.random()*commonfruits.length)]
          message.channel.send("<@!"+message.author.id + ">: " + fruit)
        }
    
        if(rarity == "uncommon")
        {
          var fruit = uncommonfruits[Math.floor(Math.random()*uncommonfruits.length)]
           message.channel.send("<@!"+message.author.id + ">: " + fruit)
        }
        
        if(rarity == "rare")
        {
         var fruit = rarefruits[Math.floor(Math.random()*rarefruits.length)]
          message.channel.send("<@!"+message.author.id + ">: " + fruit)
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
             message.channel.send("A " + "`" + fruit + "`" + " has spawned on the island!")
            }
        
            if(rarity == "uncommon")
            {
              var fruit = uncommonfruits[Math.floor(Math.random()*uncommonfruits.length)]  
              message.channel.send("A " + "`" + fruit + "`" + " has spawned on the island!")
            }
            
            if(rarity == "rare")
            {
             var fruit = rarefruits[Math.floor(Math.random()*rarefruits.length)]
             message.channel.send("A " + "`" + fruit + "`" + " has spawned on the island!")
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
    
    if(message.content.startsWith("ten!Random "))
    {
     var str = message.content.replace('ten!Random ',''); 
     var numero = Math.random() * (str - 1) + 1;
     var value = Math.round(numero)
     message.channel.send(value)
    }

    if(message.content == "ten!cmds")
    {
        message.channel.send(cmds)
    } 
    
    if(message.content == "Ten, do you love me?")
    {
     var loveme2 = loveme[Math.floor(Math.random()*loveme.length)]
     message.channel.send(loveme2) 
    }
    
});

bot.on('ready', function(){
    console.log("Ready");
});

bot.login(process.env.BOT_TOKEN)//revive
