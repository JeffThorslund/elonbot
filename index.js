const Twitter = require('twitter');

const client = new Twitter({
    consumer_key: '5T9edPuRipPgC7psKt8CCafv8',
    consumer_secret: '8yKNDDVUHod8I8aYNtkIPsGJnA4c60dRkyax7vrIql5pk0w7Ye',
    access_token_key: '1256620928395608066-afgjmJFWXJssU5rDFKLHqNjdFDxsR8',
    access_token_secret: 'kk9AU6gL5Bu7PXMfhD9UaWds4w8qlGlG42pkhA4HgAg6O'
});

let params = { screen_name: 'elonmusk' };

const getLastData = () => {
    client.get('statuses/user_timeline', params, (err, tweets, res) => {
        if (!err, res.statusCode === 200) {
            return tweets[0];
        }
    })
}

const getTweetContent = () => {
    client.get('statuses/user_timeline', params, (err, tweets, res) => {
        if (!err) {
            return tweets[0].text;
        }
    });
}

getLastData();