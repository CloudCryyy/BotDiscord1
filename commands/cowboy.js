module.exports = {
    name: "cowboy",
    description: "manda emoji de cowboy",
    execute(message, args){
        message.channel.send(":cowboy:");
    }
}