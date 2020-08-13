const express = require('express');
const Twitter = require('twitter');

const client = new Twitter({
    consumer_key: '5T9edPuRipPgC7psKt8CCafv8',
    consumer_secret: '8yKNDDVUHod8I8aYNtkIPsGJnA4c60dRkyax7vrIql5pk0w7Ye',
    access_token_key: '1256620928395608066-afgjmJFWXJssU5rDFKLHqNjdFDxsR8',
    access_token_secret: 'kk9AU6gL5Bu7PXMfhD9UaWds4w8qlGlG42pkhA4HgAg6O'
});

let params = { screen_name: 'elonmusk' };

const router = express.Router();

router.get('/elonmusk', (req, res) => {
    client.get('statuses/user_timeline', params, (err, tweets, result) => {
        if (!err && result.statusCode === 200) {
            let data = [];
            for (let i = 0; i < 5; i++) {
                let text = tweets[i].text;
                let date = tweets[i].created_at;
                let url = tweets[i].entities.urls[0];

                const tweet = {
                    text,
                    date,
                    url
                };

                data.push(tweet);
            }
            res.send(data);
        }
    }) 
})

router.get('/elonmusk/:index', (req, res) => {
    client.get('statuses/user_timeline', params, (err, tweets, result) => {
        if (!err && result.statusCode === 200) {
            if (req.params.index < 20) {
                let data = [];

                for (let i = 0; i < req.params.index; i++) {
                    let text = tweets[i].text;
                    let date = tweets[i].created_at;
                    let url = tweets[i].entities.urls[0];

                    const tweet = {
                        text,
                        date,
                        url
                    };

                    data.push(tweet);
                }
                
                res.send(data);
            } else {
                res.send({ error: `Please enter a number below 20...`})
            }
        }
    }) 
})

router.get('/tesla', (req, res) => {
    params = { screen_name: 'tesla' };
    client.get('statuses/user_timeline', params, (err, tweets, result) => {
        if (!err && result.statusCode === 200) {
            let data = [];
            for (let i = 0; i < 5; i++) {
                let text = tweets[i].text;
                let date = tweets[i].created_at;
                let url = tweets[i].entities.urls[0];

                const tweet = {
                    text,
                    date,
                    url
                };

                data.push(tweet);
            }
            res.send(data);
        }
    }) 
})

module.exports = router;