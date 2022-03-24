module.exports = {
    name: "d10",
    description: "rola d10",
    execute(message, args){
        const d10 = () => Math.floor(Math.random() * 10) + 1;
        message.channel.send("Dado caiu em: " + d10());
    }
}