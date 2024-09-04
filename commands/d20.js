import { SlashCommandBuilder } from "discord.js";
import { rollMultipleDice, rollDice, rollMultipleDiceWithAdd } from '../functions/roll.js'

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
            let adicional = 0
            if (adicionalRecebido != null){
                adicional = adicionalRecebido.value
            }
            if(vezes.value > 1){
                const dado = rollDice(20)
                searchingCritic(dado)
                if(adicional >=1){  
                    await interaction.reply('Dado caiu em: ' + dado + '\nCom adicionais fica: ' + (dado + adicional))
                    rollMultipleDiceWithAdd(adicional, vezes.value, interaction)
                } else {
                    await interaction.reply('Dado caiu em: ' + dado)
                    rollMultipleDice(vezes.value, interaction)
                }   
            } else if(vezes.value == 1){
                const dado = rollDice(20)
                searchingCritic(dado)
                if(adicional >=1) { 
                    await interaction.reply('Dado caiu em: ' + dado + '\nCom adicionais fica: ' + (dado + adicional))
                } else {
                    await interaction.reply('Dado caiu em: ' + dado)
                }
            } else {
                await interaction.reply("Você digitou alguma coisa errada, por favor repita o comando digitando um número positivo")
            }
        }
}
async function searchingCritic(dado){
    if(dado == 20) {
        await interaction.reply('CRÍTICO SUPERIOR')
    } else if(dado == 1){
        await interaction.reply('CRÍTICO INFERIOR')
    }
}