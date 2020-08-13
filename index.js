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
    const message = "🚀 ELONBOT\n\nI can help you monitoring Elon's twitter and rapidly notify you.\n\n/monitor - run the bot\n/last - get last tweet\n/tesla - get tesla\'s last tweet\n\nDeveleoped with ❤️ by https://rohit.nl/";
    bot.sendMessage(msg.chat.id, message);
});

bot.onText(/\/last/, (msg) => {
    client.get('statuses/user_timeline', params, (err, tweets, res) => {
        if (!err && res.statusCode === 200) {
            let tweet = tweets[0].text;
            let created_at = tweets[0].created_at

            let date = new Date(created_at);
            let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            let fullDate = `${date.getDate()} ${months[date.getMonth()]} ${date.getUTCHours()}:${date.getUTCMinutes()} UTC`;
            
            let message = `${tweet}\n\n${fullDate} 🔗`;
            bot.sendMessage(msg.chat.id, message);
        }
    })
});

bot.onText(/\/monitor/, (msg) => {
    bot.sendMessage(msg.chat.id, "ELONBOT is running...");
    setInterval(() => {
        client.get('statuses/user_timeline', params, (err, tweets, res) => {
            if (!err & res.statusCode === 200) {
                let tweet = tweets[0].text;
                let created_at = tweets[0].created_at;

                let date = new Date(created_at);
                let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                let fullDate = `${date.getDate()} ${months[date.getMonth()]} ${date.getUTCHours()}:${date.getUTCMinutes()} UTC`;

                console.log((new Date().getTime() - date.getTime()) / 1000);

                if (((new Date().getTime() - date.getTime()) / 1000) < 60) {
                    let message = `${tweet}\n\n${fullDate} 🔗`;

                    bot.sendMessage(msg.chat.id, message);
                }
            }
        })
    }, 30000);
});

bot.onText(/\/help/, (msg) => {
    bot.sendMessage(msg.chat.id, '💻 Command List:\n\n/monitor - run the elon bot\n/last - get elon\'s last tweet\n/tesla - get tesla\'s last tweet\n\nHave fun!\n\nDeveleoped with ❤️ by https://rohit.nl/')
})

bot.onText(/\/tesla/, (msg) => {
    params = { screen_name: 'tesla' }
    client.get('statuses/user_timeline', params, (err, tweets, res) => {
        if (!err, res.statusCode === 200) {
            let tweet = tweets[0].text;
            let created_at = tweets[0].created_at;

            let date = new Date(created_at);
            let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            let fullDate = `${date.getDate()} ${months[date.getMonth()]} ${date.getUTCHours()}:${date.getUTCMinutes()} UTC`;

            let message = `${tweet}\n\n${fullDate} 🔗`;
            bot.sendMessage(msg.chat.id, message);
        }
    })
})