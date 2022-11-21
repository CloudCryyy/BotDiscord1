module.exports = {
    name: 'd12',
    description: 'rola dado de 12 lados',
  async execute(message, args) {
    if (args < 1){
      args = 1;
    }
    for (let i = 0; i < args; i++) {
      const d12 = Math.floor(Math.random() * 12) + 1
      await message.channel.send('Dado caiu em: ' + d12)
    }
  }
}