import { SlashCommandBuilder } from "discord.js";

const ping = () => {
    data: new SlashCommandBuilder()
        .setName("ping")
        .setDescription("Responde com pong!"),
    async function execute(interaction) {
        await interaction.reply("pong")
    }
}
export default ping;