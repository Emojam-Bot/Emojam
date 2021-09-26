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
  //Emoji
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
  if (message.content === prefix + "e-brave-tan-cry") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/emoji/brave-tan/cry.png");
  }
  if (message.content === prefix + "e-brave-tan-daberoni") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/emoji/brave-tan/daberoni.png");
  }
  if (message.content === prefix + "e-brave-tan-headpat") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/emoji/brave-tan/headpat.png");
  }
  if (message.content === prefix + "e-brave-tan-hot") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/emoji/brave-tan/hot.png");
  }
  if (message.content === prefix + "e-brave-tan-laugh") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/emoji/brave-tan/laugh.png");
  }
  if (message.content === prefix + "e-brave-tan-love") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/emoji/brave-tan/love.png");
  }
  if (message.content === prefix + "e-brave-tan-sleep") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/emoji/brave-tan/sleep.png");
  }
  if (message.content === prefix + "e-brave-tan-smile") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/emoji/brave-tan/smile.png");
  }
  if (message.content === prefix + "e-brave-tan-smug") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/emoji/brave-tan/smug.png");
  }
  if (message.content === prefix + "e-brave-tan-think") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/emoji/brave-tan/think.png");
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
  if (message.content === prefix + "e-text-dead-chat") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/emoji/text/dead-chat.png");
  }
  if (message.content === prefix + "e-text-fail") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/emoji/text/fail.png");
  }
  if (message.content === prefix + "e-text-gg") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/emoji/text/gg.png");
  }
  if (message.content === prefix + "e-text-idk") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/emoji/text/idk.png");
  }
  if (message.content === prefix + "e-text-nice") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/emoji/text/nice.png");
  }
  if (message.content === prefix + "e-text-sad") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/emoji/text/sad.png");
  }
  if (message.content === prefix + "e-text-wow") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/emoji/text/wow.png");
  }
  //GIF
  if (message.content === prefix + "g-amgus-act-natural") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/gif/among-us/act-natural.gif");
  }
  if (message.content === prefix + "g-amgus-busy") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/gif/among-us/busy.gif");
  }
  if (message.content === prefix + "g-amgus-chase") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/gif/among-us/chase.gif");
  }
  if (message.content === prefix + "g-amgus-comfort") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/gif/among-us/comfort.gif");
  }
  if (message.content === prefix + "g-amgus-dance") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/gif/among-us/dance.gif");
  }
  if (message.content === prefix + "g-amgus-dead") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/gif/among-us/dead.gif");
  }
  if (message.content === prefix + "g-amgus-eating") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/gif/among-us/eating.gif");
  }
  if (message.content === prefix + "g-amgus-ejected") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/gif/among-us/ejected.gif");
  }
  if (message.content === prefix + "g-amgus-emergency") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/gif/among-us/emergency.gif");
  }
  if (message.content === prefix + "g-amgus-facepalm") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/gif/among-us/facepalm.gif");
  }
  if (message.content === prefix + "g-amgus-frustrated") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/gif/among-us/frustrated.gif");
  }
  if (message.content === prefix + "g-amgus-im-out") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/gif/among-us/im-out.gif");
  }
  if (message.content === prefix + "g-amgus-knife") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/gif/among-us/knife.gif");
  }
  if (message.content === prefix + "g-amgus-lava") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/gif/among-us/lava.gif");
  }
  if (message.content === prefix + "g-amgus-mischievous") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/gif/among-us/mischievous.gif");
  }
  if (message.content === prefix + "g-amgus-peek") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/gif/among-us/peek.gif");
  }
  if (message.content === prefix + "g-amgus-report") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/gif/among-us/report.gif");
  }
  if (message.content === prefix + "g-amgus-scan") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/gif/among-us/scan.gif");
  }
  if (message.content === prefix + "g-amgus-scared") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/gif/among-us/scared.gif");
  }
  if (message.content === prefix + "g-amgus-shhh") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/gif/among-us/shhh.gif");
  }
  if (message.content === prefix + "g-amgus-shocked") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/gif/among-us/shocked.gif");
  }
  if (message.content === prefix + "g-amgus-sus") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/gif/among-us/sus.gif");
  }
  if (message.content === prefix + "g-amgus-tag-team") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/gif/among-us/tag-team.gif");
  }
  if (message.content === prefix + "g-amgus-thinking") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/gif/among-us/thinking.gif");
  }
  if (message.content === prefix + "g-amgus-you") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/gif/among-us/you.gif");
  }
  if (message.content === prefix + "g-anime-spinning") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/gif/anime/spinning.gif");
  }
  if (message.content === prefix + "g-anime-wave") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/gif/anime/wave.gif");
  }
  if (message.content === prefix + "g-bcat-hug") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/gif/blobcat/hug.gif");
  }
  if (message.content === prefix + "g-bcat-sip") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/gif/blobcat/sip.gif");
  }
  if (message.content === prefix + "g-hello-wumpus-affection") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/gif/hello-wumpus/affection.gif");
  }
  if (message.content === prefix + "g-hello-wumpus-angry") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/gif/hello-wumpus/angry.gif");
  }
  if (message.content === prefix + "g-hello-wumpus-aww") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/gif/hello-wumpus/aww.gif");
  }
  if (message.content === prefix + "g-hello-wumpus-blush") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/gif/hello-wumpus/blush.gif");
  }
  if (message.content === prefix + "g-hello-wumpus-cheer") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/gif/hello-wumpus/cheer.gif");
  }
  if (message.content === prefix + "g-hello-wumpus-congratulations") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/gif/hello-wumpus/congratulations.gif");
  }
  if (message.content === prefix + "g-hello-wumpus-cry") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/gif/hello-wumpus/cry.gif");
  }
  if (message.content === prefix + "g-hello-wumpus-curious") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/gif/hello-wumpus/curious.gif");
  }
  if (message.content === prefix + "g-hello-wumpus-dance") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/gif/hello-wumpus/dance.gif");
  }
  if (message.content === prefix + "g-hello-wumpus-evil") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/gif/hello-wumpus/evil.gif");
  }
  if (message.content === prefix + "g-hello-wumpus-frustrated") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/gif/hello-wumpus/frustrated.gif");
  }
  if (message.content === prefix + "g-hello-wumpus-hungry") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/gif/hello-wumpus/hungry.gif");
  }
  if (message.content === prefix + "g-hello-wumpus-laugh") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/gif/hello-wumpus/laugh.gif");
  }
  if (message.content === prefix + "g-hello-wumpus-love") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/gif/hello-wumpus/love.gif");
  }
  if (message.content === prefix + "g-hello-wumpus-nauseous") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/gif/hello-wumpus/nauseous.gif");
  }
  if (message.content === prefix + "g-hello-wumpus-nervous") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/gif/hello-wumpus/nervous.gif");
  }
  if (message.content === prefix + "g-hello-wumpus-no") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/gif/hello-wumpus/no.gif");
  }
  if (message.content === prefix + "g-hello-wumpus-ok") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/gif/hello-wumpus/ok.gif");
  }
  if (message.content === prefix + "g-hello-wumpus-on-my-way") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/gif/hello-wumpus/on-my-way.gif");
  }
  if (message.content === prefix + "g-hello-wumpus-relief") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/gif/hello-wumpus/relief.gif");
  }
  if (message.content === prefix + "g-hello-wumpus-sad") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/gif/hello-wumpus/sad.gif");
  }
  if (message.content === prefix + "g-hello-wumpus-scared") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/gif/hello-wumpus/scared.gif");
  }
  if (message.content === prefix + "g-hello-wumpus-sleep") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/gif/hello-wumpus/sleep.gif");
  }
  if (message.content === prefix + "g-hello-wumpus-smile") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/gif/hello-wumpus/smile.gif");
  }
  if (message.content === prefix + "g-hello-wumpus-smirk") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/gif/hello-wumpus/smirk.gif");
  }
  if (message.content === prefix + "g-hello-wumpus-suprised") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/gif/hello-wumpus/suprised.gif");
  }
  if (message.content === prefix + "g-hello-wumpus-thanks") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/gif/hello-wumpus/thanks.gif");
  }
  if (message.content === prefix + "g-hello-wumpus-thinking") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/gif/hello-wumpus/thinking.gif");
  }
  if (message.content === prefix + "g-hello-wumpus-unamused") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/gif/hello-wumpus/unamused.gif");
  }
  if (message.content === prefix + "g-hello-wumpus-wave") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/gif/hello-wumpus/wave.gif");
  }
  if (message.content === prefix + "g-muta-laugh") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/gif/muta/laugh.gif");
  }
  if (message.content === prefix + "g-pepe-cringe") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/gif/pepe/cringe.gif");
  }
  if (message.content === prefix + "g-pepe-music") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/gif/pepe/music.gif");
  }
  if (message.content === prefix + "g-wumpus-nitro-elite-affection") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/gif/wumpus-nitro-elite/affection.gif");
  }
  if (message.content === prefix + "g-wumpus-nitro-elite-angry") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/gif/wumpus-nitro-elite/angry.gif");
  }
  if (message.content === prefix + "g-wumpus-nitro-elite-aww") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/gif/wumpus-nitro-elite/aww.gif");
  }
  if (message.content === prefix + "g-wumpus-nitro-elite-blush") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/gif/wumpus-nitro-elite/blush.gif");
  }
  if (message.content === prefix + "g-wumpus-nitro-elite-cheer") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/gif/wumpus-nitro-elite/cheer.gif");
  }
  if (message.content === prefix + "g-wumpus-nitro-elite-congratulations") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/gif/wumpus-nitro-elite/congratulations.gif");
  }
  if (message.content === prefix + "g-wumpus-nitro-elite-cry") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/gif/wumpus-nitro-elite/cry.gif");
  }
  if (message.content === prefix + "g-wumpus-nitro-elite-curious") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/gif/wumpus-nitro-elite/curious.gif");
  }
  if (message.content === prefix + "g-wumpus-nitro-elite-dance") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/gif/wumpus-nitro-elite/dance.gif");
  }
  if (message.content === prefix + "g-wumpus-nitro-elite-eating") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/gif/wumpus-nitro-elite/eating.gif");
  }
  if (message.content === prefix + "g-wumpus-nitro-elite-evil") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/gif/wumpus-nitro-elite/evil.gif");
  }
  if (message.content === prefix + "g-wumpus-nitro-elite-frustrated") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/gif/wumpus-nitro-elite/frustrated.gif");
  }
  if (message.content === prefix + "g-wumpus-nitro-elite-laugh") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/gif/wumpus-nitro-elite/laugh.gif");
  }
  if (message.content === prefix + "g-wumpus-nitro-elite-love") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/gif/wumpus-nitro-elite/love.gif");
  }
  if (message.content === prefix + "g-wumpus-nitro-elite-nauseous") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/gif/wumpus-nitro-elite/nauseous.gif");
  }
  if (message.content === prefix + "g-wumpus-nitro-elite-nervous") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/gif/wumpus-nitro-elite/nervous.gif");
  }
  if (message.content === prefix + "g-wumpus-nitro-elite-no") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/gif/wumpus-nitro-elite/no.gif");
  }
  if (message.content === prefix + "g-wumpus-nitro-elite-ok") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/gif/wumpus-nitro-elite/ok.gif");
  }
  if (message.content === prefix + "g-wumpus-nitro-elite-on-my-way") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/gif/wumpus-nitro-elite/on-my-way.gif");
  }
  if (message.content === prefix + "g-wumpus-nitro-elite-relief") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/gif/wumpus-nitro-elite/relief.gif");
  }
  if (message.content === prefix + "g-wumpus-nitro-elite-sad") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/gif/wumpus-nitro-elite/sad.gif");
  }
  if (message.content === prefix + "g-wumpus-nitro-elite-scared") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/gif/wumpus-nitro-elite/scared.gif");
  }
  if (message.content === prefix + "g-wumpus-nitro-elite-sleep") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/gif/wumpus-nitro-elite/sleep.gif");
  }
  if (message.content === prefix + "g-wumpus-nitro-elite-smile") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/gif/wumpus-nitro-elite/smile.gif");
  }
  if (message.content === prefix + "g-wumpus-nitro-elite-smirk") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/gif/wumpus-nitro-elite/smirk.gif");
  }
  if (message.content === prefix + "g-wumpus-nitro-elite-suprised") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/gif/wumpus-nitro-elite/suprised.gif");
  }
  if (message.content === prefix + "g-wumpus-nitro-elite-thanks") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/gif/wumpus-nitro-elite/thanks.gif");
  }
  if (message.content === prefix + "g-wumpus-nitro-elite-thinking") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/gif/wumpus-nitro-elite/thinking.gif");
  }
  if (message.content === prefix + "g-wumpus-nitro-elite-unamused") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/gif/wumpus-nitro-elite/unamused.gif");
  }
  if (message.content === prefix + "g-wumpus-nitro-elite-wave") {
    message.channel.send("https://raw.githubusercontent.com/WitherCubes/Emojam/master/gif/wumpus-nitro-elite/wave.gif");
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
