module.exports = {
    name: 'd4',
    description: 'rola dado de 4 lados',
  async execute(message, args) {
    if (args < 1){
      args = 1;
    }
    for (let i = 0; i < args; i++) {
      const d4 = Math.floor(Math.random() * 4) + 1
      await message.channel.send('Dado caiu em: ' + d4)
    }
  }
}