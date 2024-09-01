import { REST, Routes } from 'discord.js';
import { Client, IntentsBitField, Collection } from 'discord.js';
import 'dotenv/config';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { URL } from 'url';

const client = new Client({ 
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],  
});

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);
const commands = [];
const commandsPath = path.join(__dirname, './commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith(".js"));
client.commands = new Collection();

for (const file of commandFiles) {
  const filePath = path.join(commandsPath, file);
  const moduleURL = new URL(`file:${filePath}`);
  const { default: command } = await import(moduleURL.href);

  if (command.data && command.execute) {
    client.commands.set(command.data.name, command);
    commands.push(command.data.toJSON());
  } else {
    console.log(`[ATENÇÃO] não achei 'data' e/ou 'execute' no comando ${filePath}`);
  }
}

(async () => {
  try {
    console.log(`Reiniciando comandos, total ${commands.length}`);

    const data = await rest.put(
      Routes.applicationCommands(process.env.CLIENT_ID),
      { body: commands },
    );

    console.log("Comandos adicionados ao servidor");
  } catch (error) {
    console.error(error);
  }
})();


client.on("ready", () => {
  console.log(`${client.user.tag} tá na área`);
});

client.on("interactionCreate", async interaction => {
  if (!interaction.isChatInputCommand()) return;

  const command = client.commands.get(interaction.commandName);
  
  if (!command) {
    console.error(`Nenhum comando bate com ${interaction.commandName}`);
    return;
  }

  try {
    await command.execute(interaction);
  } catch (error) {
    console.error(error);
    if (interaction.replied || interaction.deferred) {
      await interaction.followUp({ content: 'Encontrei um problema tentando fazer isso, fala com meu Pai Cloh pra ele resolver', ephemeral: true });
    } else {
      await interaction.reply({ content: 'Encontrei um problema tentando fazer isso, fala com meu Pai Cloh pra ele resolver', ephemeral: true });
    }
  }
});

client.login(process.env.TOKEN);
