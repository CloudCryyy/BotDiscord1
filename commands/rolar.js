import { SlashCommandBuilder } from "discord.js";

export default {
    data: new SlashCommandBuilder()
        .setName("rolar")
        .setDescription("Rola algum dado"),
    async execute(interaction) {
        await interaction.reply("Rodei, muito obrigado")
    }
}