const {game, gameOptions, gameDict, endGame} = require('./options.js');
const TelegramApi = require('node-telegram-bot-api');
const token = '7075722478:AAEQuq9t_2TzcNXUZc6xGDUhTKnZ4GNvgkc'

const bot = new TelegramApi(token, {polling: true})

const chats = {

}

function algaritm() {
    return Math.random(1, 6)
}

const start = () => {
    bot.setMyCommands([
        {command: '/start', description: 'Начальное приветствие'},
        {command: '/info', description: 'Получить информацию'},
        {command: '/game', description: 'Угадай число'}
    
    ])
    
    bot.on('message', async msg => {
        const text = msg.text;
        const chatId = msg.chat.id;
    
        if(text === '/start') {
            return bot.sendMessage(chatId, 'куда', game)
        }
    
        if(text === '/game') {
            return bot.sendMessage(chatId, 'крутить', game)
        }
        return bot.sendMessage(chatId, Math.floor(Math.random() * 6).toString())
    })

    bot.on('callback_query', async msg => {
        const data = msg.data;
        const chatId = msg.message.chat.id;

        if (data === 'kru') {
            await bot.forwardMessage(chatId, '1210675674', gameDict[Math.floor(Math.random() * 6).toString()])
            return bot.sendMessage(chatId, "такой то такой то x, балик 100001$", endGame)
        }
        if (data === 'back') {
            return bot.sendMessage(chatId, 'куда', game)
        }
        return bot.forwardMessage(chatId, '1210675674', gameDict[msg.data])

    })
}

start()