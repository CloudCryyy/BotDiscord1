require("dotenv").config()
const Discord = { Client, Intents, Message, DiscordAPIError} = require("discord.js")

const client = new Discord.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ],
})

const prefix = "&"

const fs = require("fs")

client.commands = new Discord.Collection()

const commandsFiles = fs.readdirSync("./commands/").filter(file => file.endsWith(".js"));
for (const file of commandsFiles){
    const command = require(`./commands/${file}`)

    client.commands.set(command.name, command)
}

client.on("ready", () => {
    console.log("Louie tá na área")
})


client.on("messageCreate", (message) => {
   if (!message.content.startsWith(prefix) || message.author.bot) return;

   const args = message.content.slice(prefix.length).split(/ +/)
   const command = args.shift().toLowerCase()
/*
   if(command === "ping"){
    message.channel.send(`O ping está em aprox. ${client.ws.ping}`)
   } else if (command === "d2") {
       client.commands.get("d2").execute(message, args)
   }
   */
   switch (command) {
        case "ping":
            message.channel.send(`O ping está em aprox. ${client.ws.ping}`)
            break;
        
        case "d2": 
            client.commands.get("d2").execute(message, args)
            break;
        
        case "d4":
            client.commands.get("d4").execute(message, args)
            break;

        case "d6":
            client.commands.get("d6").execute(message, args)
            break;
        
        case "d8":
            client.commands.get("d8").execute(message, args)
            break;

        case "d10":
            client.commands.get("d10").execute(message, args)
            break;

        case "d12":
            client.commands.get("d12").execute(message, args)
            break;
        
        case "d20":
            client.commands.get("d20").execute(message, args)
            break;

        case "d100":
            client.commands.get("d100").execute(message, args)
            break;

        case "d1000":
            client.commands.get("d1000").execute(message, args)
            break;
        
        case "mm":
            client.commands.get("mm").execute(message, args)
            break;
        
        case "ldj":
            client.commands.get("ldj").execute(message, args)
            break;
        
        case "cowboy":
            client.commands.get("cowboy").execute(message, args)
            break;
        
        case "limpar":
            client.commands.get("limpar").execute(message, args)
            break;

        default:
            message.channel.send("Vc digitou o comando errado ou um que não existe")
            break;
   }
})

client.login(process.env.token)