module.exports = {
    name: "psi",
    description: "Abre música do cloud",
    execute(message, args){
        if(message.member.roles.cache.has("947501150192681010")){
            message.channel.send("https://www.youtube.com/watch?v=pHG_PKYyAEs")
        } else {
            message.channel.send("Sem música do Cloud pra vc")
        }
    }
}