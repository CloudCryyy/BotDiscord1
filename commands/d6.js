module.exports = {
    name: 'd6',
    description: 'rola dado de 6 lados',
  async execute(message, args) {
    if (args < 1){
      args = 1;
    }
    for (let i = 0; i < args; i++) {
      const d6 = Math.floor(Math.random() * 6) + 1
      await message.channel.send('Dado caiu em: ' + d6)
    }
  }
}