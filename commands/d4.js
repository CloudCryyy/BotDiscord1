module.exports = {
    name: "d4",
    description: "rola d4",
    execute(message, args){
        const d4 = () => Math.floor(Math.random() * 4) + 1;
        message.channel.send("Dado caiu em: " + d4());
    }
}