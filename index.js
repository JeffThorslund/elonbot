const Twitter = require('twitter');
const Telegram = require('node-telegram-bot-api');

const token = "1220029618:AAFYsxIiaO7NICO5UQBDA13RpDiIxmFOhlE";

const client = new Twitter({
    consumer_key: '5T9edPuRipPgC7psKt8CCafv8',
    consumer_secret: '8yKNDDVUHod8I8aYNtkIPsGJnA4c60dRkyax7vrIql5pk0w7Ye',
    access_token_key: '1256620928395608066-afgjmJFWXJssU5rDFKLHqNjdFDxsR8',
    access_token_secret: 'kk9AU6gL5Bu7PXMfhD9UaWds4w8qlGlG42pkhA4HgAg6O'
});

let params = { screen_name: 'elonmusk' };

let bot = new Telegram(token, {
    polling: true
});

bot.onText(/\/start/, (msg) => {
    const message = "🚀 ELONBOT\n\nI can help you monitoring Elon's twitter and rapidly notify you.\n\n/monitor - run the bot\n/last - get last tweet\n\nDeveleoped with ❤️ by https://rohit.nl/";
    bot.sendMessage(msg.chat.id, message);
});

bot.onText(/\/last/, (msg) => {
    client.get('statuses/user_timeline', params, async (err, tweets, res) => {
        if (!err) {
            console.log(tweets[0].text);
        }
    })
});
