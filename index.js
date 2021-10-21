const Discord = require("discord.js");
const keepAlive = require("./server");

require("dotenv").config();

const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)

  client.user.setActivity('withercubes.xyz')

const guildId = (process.env.GUILDID) //.env
const guild = client.guilds.cache.get(guildId)

let commands
if (guild) {
  commands = guild.commands
} else {
  commands = client.application?.commands
}

  commands?.create({
    name: 'ping',
    description: 'Replies with pong',
  })

  commands?.create({
    name: 'help',
    description: 'Shows help',
    options: [
      {
        name: 'category',
        description: 'Help category',
        required: true,
        type: Discord.Constants.ApplicationCommandOptionTypes.STRING,
      },
    ],
  })

  commands?.create({
    name: 'emoji',
    description: 'Posts Emoji',
    options: [
      {
        name: 'category',
        description: 'Category of emoji',
        required: true,
        type: Discord.Constants.ApplicationCommandOptionTypes.STRING,
      },
      {
        name: 'name',
        description: 'Name of the emoji',
        required: true,
        type: Discord.Constants.ApplicationCommandOptionTypes.STRING,
      },
    ],
  })

  commands?.create({
    name: 'gif',
    description: 'Posts GIF',
    options: [
      {
        name: 'category',
        description: 'Category of GIF',
        required: true,
        type: Discord.Constants.ApplicationCommandOptionTypes.STRING,
      },
      {
        name: 'name',
        description: 'Name of the GIF',
        required: true,
        type: Discord.Constants.ApplicationCommandOptionTypes.STRING,
      },
    ],
  })
})

client.on('interactionCreate', async (interaction) => {
  if (!interaction.isCommand()) {
    return
  }
  
  const { commandName, options } = interaction

  if (commandName === 'ping') {
    interaction.reply({
      content: 'pong',
      ephemeral: false
    })
  }
  else if (commandName === 'emoji' && options.getString('category') === 'anime') {
    const num1 = options.getString('name')
    interaction.reply({
      content: `https://raw.githubusercontent.com/WitherCubes/Emojam/master/emoji/anime/${num1}.png`,
      ephemeral: false
    })
  }
  else if (commandName === 'emoji' && options.getString('category') === 'bcat') {
    const num1 = options.getString('name')
    interaction.reply({
      content: `https://raw.githubusercontent.com/WitherCubes/Emojam/master/emoji/blobcat/${num1}.png`,
      ephemeral: false
    })
  }
  else if (commandName === 'emoji' && options.getString('category') === 'brave-tan') {
    const num1 = options.getString('name')
    interaction.reply({
      content: `https://raw.githubusercontent.com/WitherCubes/Emojam/master/emoji/brave-tan/${num1}.png`,
      ephemeral: false
    })
  }
  else if (commandName === 'emoji' && options.getString('category') === 'muta') {
    const num1 = options.getString('name')
    interaction.reply({
      content: `https://raw.githubusercontent.com/WitherCubes/Emojam/master/emoji/muta/${num1}.png`,
      ephemeral: false
    })
  }
  else if (commandName === 'emoji' && options.getString('category') === 'pepe') {
    const num1 = options.getString('name')
    interaction.reply({
      content: `https://raw.githubusercontent.com/WitherCubes/Emojam/master/emoji/pepe/${num1}.png`,
      ephemeral: false
    })
  }
  else if (commandName === 'emoji' && options.getString('category') === 'text') {
    const num1 = options.getString('name')
    interaction.reply({
      content: `https://raw.githubusercontent.com/WitherCubes/Emojam/master/emoji/text/${num1}.png`,
      ephemeral: false
    })
  }
  else if (commandName === 'gif' && options.getString('category') === 'amgus') {
    const num1 = options.getString('name')
    interaction.reply({
      content: `https://raw.githubusercontent.com/WitherCubes/Emojam/master/gif/among-us/${num1}.gif`,
      ephemeral: false
    })
  }
  else if (commandName === 'gif' && options.getString('category') === 'anime') {
    const num1 = options.getString('name')
    interaction.reply({
      content: `https://raw.githubusercontent.com/WitherCubes/Emojam/master/gif/anime/${num1}.gif`,
      ephemeral: false
    })
  }
  else if (commandName === 'gif' && options.getString('category') === 'bcat') {
    const num1 = options.getString('name')
    interaction.reply({
      content: `https://raw.githubusercontent.com/WitherCubes/Emojam/master/gif/blobcat/${num1}.gif`,
      ephemeral: false
    })
  }
  else if (commandName === 'gif' && options.getString('category') === 'hello-wumpus') {
    const num1 = options.getString('name')
    interaction.reply({
      content: `https://raw.githubusercontent.com/WitherCubes/Emojam/master/gif/hello-wumpus/${num1}.gif`,
      ephemeral: false
    })
  }
  else if (commandName === 'gif' && options.getString('category') === 'muta') {
    const num1 = options.getString('name')
    interaction.reply({
      content: `https://raw.githubusercontent.com/WitherCubes/Emojam/master/gif/muta/${num1}.gif`,
      ephemeral: false
    })
  }
  else if (commandName === 'gif' && options.getString('category') === 'pepe') {
    const num1 = options.getString('name')
    interaction.reply({
      content: `https://raw.githubusercontent.com/WitherCubes/Emojam/master/gif/pepe/${num1}.gif`,
      ephemeral: false
    })
  }
  else if (commandName === 'gif' && options.getString('category') === 'wumpus-nitro-elite') {
    const num1 = options.getString('name')
    interaction.reply({
      content: `https://raw.githubusercontent.com/WitherCubes/Emojam/master/gif/wumpus-nitro-elite/${num1}.gif`,
      ephemeral: false
    })
  }
  else if (commandName === 'help' && options.getString('category') === 'all') {
    interaction.reply({
      content: "These are all the categories of emojis anf gifs:\n\n**amgus** - /help amgus\n**anime** - /help anime\n**bcat** - /help bcat\n**brave-tan** - /help brave-tan\n**hello-wumpus** - /help hello-wumpus\n**muta** - /help muta\n**pepe** - /help pepe\n**text** - /help text\n**wumpus-nitro-elite** - /help wumpus-nitro-elite",
      ephemeral: true
    })
  }
  else if (commandName === 'help' && options.getString('category') === 'amgus') {
    interaction.reply({
      content: "**GIF:**\nact-natural\nbusy\nchase\ncomfort\ndance\ndead\neating\nejected\nemergency\nfacepalm\nfrustrated\nim-out\nknife\nlava\nmischievous\npeek\nreport\nscan\nscared\nshhh\nshocked\nsus\ntag-team\nthinking\nyou",
      ephemeral: true
    })
  }
  else if (commandName === 'help' && options.getString('category') === 'anime') {
    interaction.reply({
      content: "**Emoji:**\nangry\nangryping\naquacry\nawoo\nawoothink\nbaka\nblushwow\ncheese\ngiggle\nheadpat-1\nheadpat-2\nhehe\nkannabear\nkannawhat\nlewd\nlmao\nlurk\nmashahello\nnepsmug\nohmy\nryukosip\nsagirishy\nshock\n\n**GIF:**\nspinning\nwave",
      ephemeral: true
    })
  }
  else if (commandName === 'help' && options.getString('category') === 'bcat') {
    interaction.reply({
      content: "**Emoji:**\nangry\nheart\nknife\nmeataww\nmelt\npat\npopcorn\nworried\n\n**GIF:**\nhug\nsip",
      ephemeral: true
    })
  }
  else if (commandName === 'help' && options.getString('category') === 'brave-tan') {
    interaction.reply({
      content: "**Emoji:**\nangry\ncry\ndaberoni\nheadpat\nhot\nlaugh\nlove\nsleep\nsmile\nsmug\nthink",
      ephemeral: true
    })
  }
  else if (commandName === 'help' && options.getString('category') === 'hello-wumpus') {
    interaction.reply({
      content: "**GIF:**\naffection\nangry\naww\nblush\ncheer\ncongratulations\ncry\ncurious\ndance\nevil\nfrustrated\nhungry\nlaugh\nlove\nnauseous\nnervous\nno\nok\non-my-way\nrelief\nsad\nscared\nsleep\nsmile\nsmirk\nsuprised\nthanks\nthinking\nunamused\nwave",
      ephemeral: true
    })
  }
  else if (commandName === 'help' && options.getString('category') === 'muta') {
    interaction.reply({
      content: "**Emoji:**\n1\n2\n3\n\n**GIF:**\nlaugh",
      ephemeral: true
    })
  }
  else if (commandName === 'help' && options.getString('category') === 'pepe') {
    interaction.reply({
      content: "**Emoji:**\nban\ncross\ngun\nhappy\nhigh\nlove\nmonkas\npepega\nspit\nwow\nwowcry\n\n**GIF:**\ncringe\nmusic",
      ephemeral: true
    })
  }
  else if (commandName === 'help' && options.getString('category') === 'text') {
    interaction.reply({
      content: "**Emoji:**\ndead-chat\nfail\ngg\nidk\nnice\nsad\nwow",
      ephemeral: true
    })
  }
  else if (commandName === 'help' && options.getString('category') === 'wumpus-nitro-elite') {
    interaction.reply({
      content: "**GIF:**\naffection\nangry\naww\nblush\ncheer\ncongratulations\ncry\ncurious\ndance\neating\nevil\nfrustrated\nlaugh\nlove\nnauseous\nnervous\nno\nok\non-my-way\nrelief\nsad\nscared\nsleep\nsmile\nsmirk\nsuprised\nthanks\nthinking\nunamused\nwave",
      ephemeral: true
    })
  }
})

keepAlive()
client.login(process.env.BOTTOKEN) //.env
