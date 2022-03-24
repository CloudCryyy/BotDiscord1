module.exports = {
    name: "d20",
    description: "rola d20",
    execute(message, args){
        const d20 = () => Math.floor(Math.random() * 20) + 1;
        message.channel.send("Dado caiu em: " + d20());
    }
}