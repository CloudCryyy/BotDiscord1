module.exports = {
    name: "d1000",
    description: "rola d1000",
    execute(message, args){
        const d1000 = () => Math.floor(Math.random() * 1000) + 1;
        message.channel.send("Dado caiu em: " + d1000());
    }
}