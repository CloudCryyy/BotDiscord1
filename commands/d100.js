module.exports = {
    name: "d100",
    description: "rola d100",
    execute(message, args){
        const d100 = () => Math.floor(Math.random() * 100) + 1;
        message.channel.send("Dado caiu em: " + d100());
    }
}