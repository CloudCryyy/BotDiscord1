module.exports = {
    name: "d2",
    description: "rola d2",
    execute(message, args){
        const d2 = () => Math.floor(Math.random() * 2) + 1;
        message.channel.send("Dado caiu em: " + d2());
    }
}