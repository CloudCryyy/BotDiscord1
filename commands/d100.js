import { SlashCommandBuilder } from "discord.js";

export default {
    data: new SlashCommandBuilder()
        .setName("d100")
        .setDescription("Rola um d100")
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
                const dado = Math.floor(Math.random() * 100) + 1       
                if(dado == 100) {
                    await interaction.reply('CRÍTICO SUPERIOR')
                } else if(dado == 1){
                    await interaction.reply('CRÍTICO INFERIOR')
                } else {
                    if(adicional >=1){        
                        await interaction.reply('Dado caiu em: ' + dado + '\nCom adicionais fica: ' + (dado + adicional))
                        for (let i = 1; i < vezes.value; i++) {
                            const dado = Math.floor(Math.random() * 100) + 1
                            if(dado == 100) {
                                await interaction.followUp('CRÍTICO SUPERIOR')
                            } else if(dado == 1){
                                await interaction.followUp('CRÍTICO INFERIOR')
                            } else {
                                await interaction.followUp('Dado caiu em: ' + dado + '\nCom adicionais fica: ' + (dado + adicional))
                            }
                        }
                    } else {
                        await interaction.reply('Dado caiu em: ' + dado)
                        for (let i = 1; i < vezes.value; i++) {
                            const dado = Math.floor(Math.random() * 100) + 1
                            if(dado == 100) {
                                await interaction.followUp('CRÍTICO SUPERIOR')
                            } else if(dado == 1){
                                await interaction.followUp('CRÍTICO INFERIOR')
                            } else {
                                await interaction.followUp('Dado caiu em: ' + dado)
                            }
                        }
                    }   
                }
            } else if(vezes.value == 1){
                const dado = Math.floor(Math.random() * 100) + 1
                if(dado == 100) {
                    await interaction.reply('CRÍTICO SUPERIOR')
                } else if(dado == 1){
                    await interaction.reply('CRÍTICO INFERIOR')
                } else {
                    if(adicional >=1) { 
                        await interaction.reply('Dado caiu em: ' + dado + '\nCom adicionais fica: ' + (dado + adicional))
                    } else {
                        await interaction.reply('Dado caiu em: ' + dado)
                    }
                }
            } else {
                await interaction.reply("Você digitou alguma coisa errada, por favor repita o comando digitando um número positivo")
            }
        }
}