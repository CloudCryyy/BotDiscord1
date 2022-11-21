module.exports = {
    name: 'gian',
    description:'responde com um cowboy',
  async execute(message) {
    await message.channel.send(':cowboy:');
  }
}