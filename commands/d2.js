module.exports = {
    name:'d2',
    description:'rola dado de 2 lados',
  async execute(message, args) {
    if (args < 1){
      args = 1;
    }
    for (let i = 0; i < args; i++) {
      const d2 = Math.floor(Math.random() * 2) + 1
      await message.channel.send('Dado caiu em: ' + d2);
    }
  }
}