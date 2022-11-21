module.exports = {
    name: 'd8',
    description: 'rola dado de 8 lados',
  async execute(message, args) {
    if (args < 1){
      args = 1;
    }
    for (let i = 0; i < args; i++) {
      const d8 = Math.floor(Math.random() * 8) + 1
      await message.channel.send('Dado caiu em: ' + d8)
    }
  }
}