module.exports = {
    gameOptions: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: 'промах', callback_data: '0'}],
                [{text: 'право низ', callback_data: '1'}],
                [{text: 'почти центр', callback_data: '2'}],
                [{text: 'лево верх', callback_data: '3'}],
                [{text: 'лево низ', callback_data: '4'}],
                [{text: 'центр', callback_data: '5'}]
            ]
        })
    },
    
    game: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: 'крутить', callback_data: 'kru'},{text: 'деп', callback_data: 'dep'}],
                [{text: 'канал', callback_data: 'chanel'}]
            ]
        })
    },
    
    endGame: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: 'крутить', callback_data: 'kru'},{text: 'бэк', callback_data: 'back'}]
            ]
        })
    },
    
    gameDict: {
        '0': 176,
        '1': 180,
        '2': 186,
        '3': 184,
        '4': 182,
        '5': 178
    }
}