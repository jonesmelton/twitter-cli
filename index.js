require('dotenv').config();

// the wrapper around the twitter interface I'm using
const Twit = require('twit');

// initialization of the wrapper with api keys
const T = new Twit({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.TOKEN_SECRET,
});

function tweet(content) {
  T.post('statuses/update', { status: content }, (err, data, response) => {
    // just printing the results here but you could set it a variable or return it
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

function myRetweets() {
  T.get('statuses/retweets_of_me', (err, data, response) => {
    console.log(data)
  })
}

function following() {
  T.get('friends/list', (err, data, response) => {
    console.log(data)
  })
}

function followers() {
  T.get('followers/list', (err, data, response) => {
    console.log(data)
  })
}

// get the action we're to perform
const command = process.argv[2]

// grab the rest of the user input and turn it into a string
const input = process.argv.slice(3, process.argv.length).join(' ')

// takes command from the user and performs the appropriate action
switch(command) {
  case undefined: 
    console.log("Give a command: tweet, search, user, retweets, followers, or following")
    break;
  case "tweet":
    tweet(input)
    break;
  case "search":
    searchTweets(input)
    break;
  case "user":
    userTweets(input)
    break;
  case "retweets":
    myRetweets()
    break;
  case "following":
    following()
    break;
  case "followers":
    followers()
    break;
}

