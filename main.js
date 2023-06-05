const Discord = ({ Client, GatewayIntentBits } = require('discord.js'))
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
})
const config = require('./config.json')

client.on('ready', () => {
  console.log(`louie tá na área`)
})

const fs = require('fs')

client.commands = new Discord.Collection()

const commandsFiles = fs
  .readdirSync('./commands/')
  .filter(file => file.endsWith('.js'))
for (const file of commandsFiles) {
  const command = require(`./commands/${file}`)

  client.commands.set(command.name, command)
}

client.on('messageCreate', message => {
  if (!message.content.startsWith(config.prefix) || message.author.bot) return

  const args = message.content.slice(config.prefix.length).trim().split(/ +/)
  const command = args.shift().toLowerCase()

  switch (command) {
    case 'ping':
      message.channel.send(`O ping está em aprox. ${client.ws.ping}`);
      break;

    case 'd2':
      client.commands.get('d2').execute(message, args);
      break;

    case 'd4':
      client.commands.get('d4').execute(message, args);
      break;

    case 'd6':
      client.commands.get('d6').execute(message, args);
      break;

    case 'd8':
      client.commands.get('d8').execute(message, args);
      break;

    case 'd10':
      client.commands.get('d10').execute(message, args);
      break;

    case 'd12':
      client.commands.get('d12').execute(message, args);
      break;

    case 'd20':
      client.commands.get('d20').execute(message, args);
      break;

    case 'd100':
      client.commands.get('d100').execute(message, args);
      break;

    case 'd1000':
      client.commands.get('d1000').execute(message, args);
      break;

    case 'openbook':
      client.commands.get('openbook').execute(message, args);
      break;

    case 'cowboy':
      client.commands.get('gian').execute(message, args);
      break;

    case 'limpar':
      client.commands.get('limpar').execute(message, args);
      break;

    default:
      message.channel.send('Vc digitou o comando errado ou um que não existe');
      break;
  }
})

client.login(config.token)