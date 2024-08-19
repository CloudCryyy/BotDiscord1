import { REST, Routes } from 'discord.js'
import { Client, GatewayIntentBits } from 'discord.js';
import 'dotenv/config'


const commands = [
  {
    name: 'ping',
    description: 'Responde com um Pong!',
  },

];

const rest = new REST({version: '10'}).setToken(process.env.TOKEN);

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

try {
  console.log('Iniciando Aplicação com comandos (/)')
  
  await rest.put(Routes.applicationCommands(process.env.CLIENT_ID), { body: commands });

  console.log('Comandos (/) aplicados com sucesso');

} catch (error) {
  console.log(error)
}

client.on('ready', () => {
  console.log(`Louie tá na área, tag ${client.user.tag}`)
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'ping'){
    await interaction.reply('Pong');
  }
})

client.login(process.env.TOKEN)