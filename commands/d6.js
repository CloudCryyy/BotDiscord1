module.exports = {
    name: "d6",
    description: "rola d6",
    execute(message, args){
        const d6 = () => Math.floor(Math.random() * 6) + 1;
        message.channel.send("Dado caiu em: " + d6());
    }
}