const TelegramBot = require('node-telegram-bot-api');

const id = ""
const telegramBot = ""
const bot =  new TelegramBot(telegramBot, {
    polling: true
});

const sendMsg = async (id, msg) => {
    try {
        await bot.sendMessage(id, msg, { parse_mode: 'HTML', disable_web_page_preview: true })
    } catch (e) {
        console.log(e.response.body.description);
    }
}

module.exports.submut = (req, res) => {
    const { phone, text } = req.body
    if(phone) {
        sendMsg(id, `
        Phone: ${phone}
        Text: ${text}
            `)
        res.status(200).json({
            status: true
        })
    } else {
        res.status(200).json({
            status: false
        })
    }
}