import { SlashCommandBuilder } from "discord.js";

export default {
    async execute(interaction) {
        const subCommand = interaction.option.getSubcommand();

        if(subCommand === "dado"){
            await interaction.reply("to tentando")
        }

    },

    data: new SlashCommandBuilder()
        .setName("rolar")
        .setDescription("Rola um dado de alguns lados")
        .addNumberOption((option) =>
            option
                .setName("vezes")
                .setDescription("decide quantas vezes o dado vai ser rodado")
                .setRequired(true))
        .addNumberOption((option)=>
            option
                .setName("d20")
                .setDescription("rola o dado de 20 lados"))
}