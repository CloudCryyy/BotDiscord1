import { SlashCommandBuilder } from "discord.js";
import { rollMultipleDice, rollDice, rollMultipleDiceWithAdd, searchingCritic } from '../functions/roll.js'

export default {
    data: new SlashCommandBuilder()
        .setName("d20")
        .setDescription("Rola um d20")
        .addNumberOption((option) =>
            option
                .setName('vezes')
                .setDescription('escolhe o número de vezes')
                .setRequired(true))
        .addNumberOption((option) =>
            option
                .setName('adicional')
                .setDescription('colocar um valor adicional para ser somado')),
        async execute(interaction){
            const vezes = interaction.options.get('vezes');
            const adicionalRecebido = interaction.options.get('adicional');
            const valorDoDado = 20;
            let adicional = 0
            if (adicionalRecebido != null){
                adicional = adicionalRecebido.value
            }
            if(vezes.value > 1){
                const dado = rollDice(valorDoDado)
                if(dado == 20 || dado == 1){
                    searchingCritic(dado, interaction)
                } else if(adicional >=1){  
                    await interaction.reply('Dado caiu em: ' + dado + '\nCom adicionais fica: ' + (dado + adicional));
                    rollMultipleDiceWithAdd(adicional, vezes.value, interaction, valorDoDado);
                } else {
                    await interaction.reply('Dado caiu em: ' + dado);
                    rollMultipleDice(vezes.value, interaction, valorDoDado);
                }   
            } else if(vezes.value == 1){
                const dado = rollDice(valorDoDado)
                if(dado == 20 || dado == 1){
                    searchingCritic(dado, interaction)
                } else if(adicional >=1) { 
                    await interaction.reply('Dado caiu em: ' + dado + '\nCom adicionais fica: ' + (dado + adicional))
                } else {
                    await interaction.reply('Dado caiu em: ' + dado)
                }
            } else {
                await interaction.reply("Você digitou alguma coisa errada, por favor repita o comando digitando um número positivo")
            }
        }
}