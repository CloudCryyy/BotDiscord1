import { SlashCommandBuilder } from "discord.js";

export default {
    data: new SlashCommandBuilder()
        .setName("rolar")
        .setDescription("Rola uns dados")
        .addNumberOption((option) =>
            option
                .setName('lados')
                .setDescription('escolhe o número de lados')
                .setRequired(true))
        .addNumberOption((option) =>
            option
                .setName('vezes')
                .setDescription('escolhe o número de vezes')
                .setRequired(true)),
        async execute(interaction){
            const lados = interaction.options.get('lados').value;
            let vezes = interaction.options.get('vezes');
            if (vezes.value < 1){
                vezes.value = 1;
            }
            const dado = Math.floor(Math.random() * lados) + 1
            await interaction.reply('Dado caiu em: ' + dado)
            for (let i = 1; i < vezes.value; i++) {
                const dado = Math.floor(Math.random() * lados) + 1
                await interaction.followUp('Dado caiu em: ' + dado)
            }
        }
}