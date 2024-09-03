import { SlashCommandBuilder } from "discord.js";

export default {
    data: new SlashCommandBuilder()
        .setName("d12")
        .setDescription("Rola um d12")
        .addNumberOption((option) =>
            option
                .setName('vezes')
                .setDescription('escolhe o número de vezes')
                .setRequired(true)),
        async execute(interaction){
            const vezes = interaction.options.get('vezes');
            if(vezes.value > 1){
                const dado = Math.floor(Math.random() * 12) + 1                
                await interaction.reply('Dado caiu em: ' + dado)
                for (let i = 1; i < vezes.value; i++) {
                    const dado = Math.floor(Math.random() * 12) + 1
                    await interaction.followUp('Dado caiu em: ' + dado)
                }
            } else if(vezes.value == 1){
                const dado = Math.floor(Math.random() * 12) + 1
                await interaction.reply('Dado caiu em: ' + dado)
            } else {
                await interaction.reply("Você digitou alguma coisa errada, por favor repita o comando digitando um número positivo")
            }
        }
}