const App = require('../index');
const Telegram = require('node-telegram-bot-api');

const token = "1220029618:AAFYsxIiaO7NICO5UQBDA13RpDiIxmFOhlE";

let bot = new Telegram(token, {
    polling: true
});

bot.onText(/\/start/, (msg) => {
    const message = "🚀 ELONBOT\n\nI can help you monitoring Elon's twitter and rapidly notify you.\n\n/monitor - run the bot\n/last - get last tweet\n\nDeveleoped with ❤️ by https://rohit.nl/";
    bot.sendMessage(msg.chat.id, message);
});

bot.onText(/\/monitor/, (msg) => {

})