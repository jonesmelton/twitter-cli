require('dotenv').config();

const Twit = require('twit');

const T = new Twit({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.TOKEN_SECRET,
});

function tweet(content) {
  T.post('statuses/update', { status: content }, (err, data, response) => {
    console.log(data)
  })
}

function searchTweets(searchTerms) {
  T.get('search/tweets', { q: searchTerms, count: 100 }, (err, data, response) => {
    console.log(data)
  })
}

function userTweets(username) {
  T.get('users/show', {screen_name: username}, (err, data, response) => {
    console.log(data)
  })
}

userTweets(process.argv[2])
