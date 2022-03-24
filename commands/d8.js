module.exports = {
    name: "d8",
    description: "rola d8",
    execute(message, args){
        const d8 = () => Math.floor(Math.random() * 8) + 1;
        message.channel.send("Dado caiu em: " + d8());
    }
}