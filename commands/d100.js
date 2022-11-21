module.exports = {
    name: 'd100',
    description: 'rola dado de 100 lados',
  async execute(message, args) {
    if (args < 1){
      args = 1;
    }
    for (let i = 0; i < args; i++) {
      const d100 = Math.floor(Math.random() * 100) + 1;
      await message.channel.send('Dado caiu em: ' + d100);
    }
  }
}