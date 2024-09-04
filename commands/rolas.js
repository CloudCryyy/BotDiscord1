import { SlashCommandBuilder } from "discord.js";
import { rollMultipleDice, rollDice, rollMultipleDiceWithAdd } from '../functions/roll.js'

export default {
    data: new SlashCommandBuilder()
        .setName("rolas")
        .setDescription("quantas caiem no seu cu"),
        async execute(interaction){
            const valorDoDado = 1000
            const dado = rollDice(valorDoDado)
            await interaction.reply(`${dado} rolas cairam no seu cu`)
        }
}