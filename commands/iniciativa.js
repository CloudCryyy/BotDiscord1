import { SlashCommandBuilder } from "discord.js";

export default {
    data: new SlashCommandBuilder()
        .setName("iniciativa")
        .setDescription("Use o seu modificador de destreza para iniciar um combate")
        .addNumberOption((option) =>
            option
                .setName('destreza')
                .setDescription('Adicione o seu valor de iniciativa')
                .setRequired(true)),
        async execute(interaction){
            const destreza = interaction.options.get('destreza').value;
            const dado = Math.floor(Math.random() * 20) + 1 
            if(dado == 20) {
                await interaction.reply('CRÍTICO SUPERIOR: primeira pessoa a jogar')
            } else if(dado == 1){
                await interaction.reply('CRÍTICO INFERIOR: última pessoa a jogar')
            } else {
                await interaction.reply('D20 caiu em: ' + dado + '\nValor de iniciativa: ' + (dado + destreza))
            }
        }
}