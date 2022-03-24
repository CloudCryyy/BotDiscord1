module.exports = {
    name: "d12",
    description: "rola d12",
    execute(message, args){
        const d12 = () => Math.floor(Math.random() * 12) + 1;
        message.channel.send("Dado caiu em: " + d12());
    }
}