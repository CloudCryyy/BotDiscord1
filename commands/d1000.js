module.exports = {
    name: 'd1000',
    description: 'rola dado de 1000 lados',
  async execute(message, args) {
    if (args < 1){
      args = 1;
    }
    for (let i = 0; i < args; i++) {
      const d1000 = Math.floor(Math.random() * 1000) + 1
      await message.channel.send('Dado caiu em: ' + d1000)
    }
  }
}