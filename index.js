const Discord = require("discord.js");
const keepAlive = require("./server");

require("dotenv").config();

const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

const prefix = "$";

client.on("messageCreate", message => {
  if (message.content === prefix + "e-anime-angry") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/emoji/anime/angry.png");
  }
  if (message.content === prefix + "e-anime-angryping") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/emoji/anime/angryping.png");
  }
  if (message.content === prefix + "e-anime-aquacry") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/emoji/anime/aquacry.png");
  }
  if (message.content === prefix + "e-anime-awoo") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/emoji/anime/awoo.png");
  }
  if (message.content === prefix + "e-anime-awoothink") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/emoji/anime/awoothink.png");
  }
  if (message.content === prefix + "e-anime-baka") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/emoji/anime/baka.png");
  }
  if (message.content === prefix + "e-anime-blushwow") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/emoji/anime/blushwow.png");
  }
  if (message.content === prefix + "e-anime-cheese") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/emoji/anime/cheese.png");
  }
  if (message.content === prefix + "e-anime-giggle") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/emoji/anime/giggle.png");
  }
  if (message.content === prefix + "e-anime-headpat-1") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/emoji/anime/headpat-1.png");
  }
  if (message.content === prefix + "e-anime-headpat-2") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/emoji/anime/headpat-2.png");
  }
  if (message.content === prefix + "e-anime-hehe") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/emoji/anime/hehe.png");
  }
  if (message.content === prefix + "e-anime-kannabear") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/emoji/anime/kannabear.png");
  }
  if (message.content === prefix + "e-anime-kannawhat") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/emoji/anime/kannawhat.png");
  }
  if (message.content === prefix + "e-anime-lewd") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/emoji/anime/lewd.png");
  }
  if (message.content === prefix + "e-anime-lmao") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/emoji/anime/lmao.png");
  }
  if (message.content === prefix + "e-anime-lurk") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/emoji/anime/lurk.png");
  }
  if (message.content === prefix + "e-anime-mashahello") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/emoji/anime/mashahello.png");
  }
  if (message.content === prefix + "e-anime-nepsmug") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/emoji/anime/nepsmug.png");
  }
  if (message.content === prefix + "e-anime-ohmy") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/emoji/anime/ohmy.png");
  }
  if (message.content === prefix + "e-anime-ryukosip") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/emoji/anime/ryukosip.png");
  }
  if (message.content === prefix + "e-anime-sagirishy") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/emoji/anime/sagirishy.png");
  }
  if (message.content === prefix + "e-anime-shock") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/emoji/anime/shock.png");
  }
  if (message.content === prefix + "e-bcat-angry") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/emoji/blobcat/angry.png");
  }
  if (message.content === prefix + "e-bcat-heart") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/emoji/blobcat/heart.png");
  }
  if (message.content === prefix + "e-bcat-knife") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/emoji/blobcat/knife.png");
  }
  if (message.content === prefix + "e-bcat-meataww") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/emoji/blobcat/meataww.png");
  }
  if (message.content === prefix + "e-bcat-melt") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/emoji/blobcat/melt.png");
  }
  if (message.content === prefix + "e-bcat-pat") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/emoji/blobcat/pat.png");
  }
  if (message.content === prefix + "e-bcat-popcorn") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/emoji/blobcat/popcorn.png");
  }
  if (message.content === prefix + "e-bcat-worried") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/emoji/blobcat/worried.png");
  }
  if (message.content === prefix + "e-brave-tan-angry") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/emoji/brave-tan/angry.png");
  }
  if (message.content === prefix + "e-brave-tan-dab") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/emoji/brave-tan/dab.png");
  }
  if (message.content === prefix + "e-brave-tan-excited") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/emoji/brave-tan/excited.png");
  }
  if (message.content === prefix + "e-brave-tan-headpat") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/emoji/brave-tan/headpat.png");
  }
  if (message.content === prefix + "e-brave-tan-hi") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/emoji/brave-tan/hi.png");
  }
  if (message.content === prefix + "e-brave-tan-love") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/emoji/brave-tan/love.png");
  }
  if (message.content === prefix + "e-brave-tan-meow") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/emoji/brave-tan/meow.png");
  }
  if (message.content === prefix + "e-brave-tan-scared") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/emoji/brave-tan/scared.png");
  }
  if (message.content === prefix + "e-brave-tan-sleep") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/emoji/brave-tan/sleep.png");
  }
  if (message.content === prefix + "e-brave-tan-think") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/emoji/brave-tan/think.png");
  }
  if (message.content === prefix + "e-brave-tan-tired") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/emoji/brave-tan/tired.png");
  }
  if (message.content === prefix + "e-muta-1") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/emoji/muta/1.png");
  }
  if (message.content === prefix + "e-muta-2") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/emoji/muta/2.png");
  }
  if (message.content === prefix + "e-muta-3") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/emoji/muta/3.png");
  }
  if (message.content === prefix + "e-pepe-ban") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/emoji/pepe/ban.png");
  }
  if (message.content === prefix + "e-pepe-cross") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/emoji/pepe/cross.png");
  }
  if (message.content === prefix + "e-pepe-gun") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/emoji/pepe/gun.png");
  }
  if (message.content === prefix + "e-pepe-happy") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/emoji/pepe/happy.png");
  }
  if (message.content === prefix + "e-pepe-high") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/emoji/pepe/high.png");
  }
  if (message.content === prefix + "e-pepe-love") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/emoji/pepe/love.png");
  }
  if (message.content === prefix + "e-pepe-monkas") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/emoji/pepe/monkas.png");
  }
  if (message.content === prefix + "e-pepe-pepega") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/emoji/pepe/pepega.png");
  }
  if (message.content === prefix + "e-pepe-spit") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/emoji/pepe/spit.png");
  }
  if (message.content === prefix + "e-pepe-wow") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/emoji/pepe/wow.png");
  }
  if (message.content === prefix + "e-pepe-wowcry") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/emoji/pepe/wowcry.png");
  }
})

client.on('ready', async () => {
    let statuses = [
        `Mr Beast`,
        `3L0N MU$K`,
        `PewDiePie`,
        `SomeOrdinaryGamers`,
        `Jeff Bezos`,
        `Bitcoin Price`,
        `Monero Price`,
        `DogeCoin Price`,
        `LiteCoin Price`,
        `Mark Zuckemburg`,
        `Your Money Balance`,
        `Your Mom`,
        `Linux Market Share`,
        `BSOD Screen of Windows 10`,
        `Windows XP source code`,
        `Pokemon`,
        `Death Note`,
        `Beyblade`
    ]

    setInterval(function () {
        let status = statuses[Math.floor(Math.random() * statuses.length)];
        client.user.setActivity(status, {
            type: "WATCHING",
        })
    }, 10000)
})

keepAlive()
client.login(process.env.BOTTOKEN)
