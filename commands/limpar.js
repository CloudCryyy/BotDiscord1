import { SlashCommandBuilder } from 'discord.js';

export default {
    data: new SlashCommandBuilder()
        .setName('limpar')
        .setDescription('limpa mensagens no chat')
        .addIntegerOption((option) =>
            option
                .setName('quantidade')
                .setDescription('Escolha o número de mensagens a serem apagadas')
                .setMinValue(1)
                .setMaxValue(100)
                .setRequired(true)),
        async execute(interaction){
            const { options, channel } = interaction;
            let quantidade = options.getInteger('quantidade');
            try {
                const channelMessages = await channel.messages.fetch();
                if(channelMessages.size === 0) {
                    await interaction.reply('Não há mais mensagens nesse canal!')
                }

                if(quantidade > channelMessages.size) quantidade = channelMessages.size;
                let messagesToDelete = [];

                messagesToDelete = channelMessages.first(quantidade)

                if(messagesToDelete.length > 0){
                    await channel.bulkDelete(messagesToDelete, true);
                    await interaction.reply('Memória apagada')
                }
            } catch (error) {
                await interaction.reply(`[ATENÇÃO] ENCONTREI O ERRO TENTANDO APAGAR MENSAGENS`)
                console.log(`[ATENÇÃO] ENCONTREI O ERRO: ${error}`)
            }

        }
};
