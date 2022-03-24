module.exports = {
    name: "limpar",
    description: "Limpa as mensagens do canal",
    async execute(message, args){
        if (!args[0]) {
            return message.reply("Escreva o quanto de mensagens vc quer limpar")
        } else if(isNaN(args[0])) {
            return message.reply("Escreva um número de verdade :neutral_face:")
        } else if (args[0] > 100){
            message.reply(":clown:");
            message.reply("Muita informação, não consigo apagar mais de 100 mensagens de uma vez");
        } else if (args[0] < 1) {
            message.reply(":confused:");
            message.channel.send("Não consigo apagar menos de uma mensagem meu amor");
        }else {
            await message.channel.messages.fetch({limit: args[0]}).then(messages => {
            message.channel.bulkDelete(messages);
            });
        }
    }
}