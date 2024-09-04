function rollDice(dice){
    const dado = Math.floor(Math.random() * dice) + 1
    return dado;
}

async function rollMultipleDice(vezes, interaction, valorDoDado) {
    if (valorDoDado != 20){
        for (let i = 1; i < vezes; i++) {
            const dado = rollDice(valorDoDado)
            await interaction.followUp('Dado caiu em: ' + dado)
        }
    } else {
        for (let i = 1; i < vezes; i++) {
            const dado = rollDice(valor)
            if(dado == 20) {
                await interaction.followUp('CRÍTICO SUPERIOR')
            } else if(dado == 1){
                await interaction.followUp('CRÍTICO INFERIOR')
            } else {
                await interaction.followUp('Dado caiu em: ' + dado)
            }
        }
    }
    
}

async function rollMultipleDiceWithAdd(adicional, vezes, interaction, valorDoDado){
    if(valorDoDado != 20){
        for (let i = 1; i < vezes; i++) {
            const dado = rollDice(valorDoDado)
            await interaction.followUp('Dado caiu em: ' + dado + '\nCom adicionais fica: ' + (dado + adicional))
        }
    } else {
        for (let i = 1; i < vezes; i++) {
            const dado = rollDice(20)
            if(dado == 20) {
                await interaction.followUp('CRÍTICO SUPERIOR')
            } else if(dado == 1){
                await interaction.followUp('CRÍTICO INFERIOR')
            } else {
                await interaction.followUp('Dado caiu em: ' + dado + '\nCom adicionais fica: ' + (dado + adicional))
            }
        }
    }
    
}

export { rollDice, rollMultipleDice, rollMultipleDiceWithAdd };