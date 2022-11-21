module.exports = {
    name:'d20',
    description:'rola dado de 20 lados',
  async execute(message, args) {
    if (args < 1){
      args = 1;
    }
    for (let i = 0; i < args; i++) {
      const d20 = Math.floor(Math.random() * 20) + 1
      await message.channel.send('Dado caiu em: ' + d20)
    }
  }
}