module.exports = {
  name: 'openbook',
  description: 'retorna o link para algum livro útil para o jogo',
  async execute(message, args) {
    if (args == 'ldj') {
      await message.channel.send(
        'https://ordempendragon.files.wordpress.com/2017/04/dd-5e-livro-do-jogador-fundo-branco-biblioteca-c3a9lfica.pdf'
      )
    } else if (args == 'mm') {
      await message.channel.send(
        'https://ordempendragon.files.wordpress.com/2017/04/monster-a-day-compendium-upgraded.pdf'
      )
    } else if (args == 'sp') {
      await message.channel.send(
        'https://homebrewery.naturalcrit.com/share/r1mnLrkNrZ'
      )
    }
  }
}
