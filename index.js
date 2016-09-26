require('dotenv').config();

const Twit = require('twit');

const T = new Twit({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.TOKEN_SECRET,
});

function doTweet(content) {
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

// grab the argument passed in to the program
const command = process.argv[2]

// grab the rest of the user input and turn it into a string
const input = process.argv.slice(3, process.argv.length).join(' ')


switch(command) {
  case undefined: 
    console.log("input a thing")
    break;
  case "tweet":
    doTweet(input)
    break;
  case "search":
    searchTweets(input)
    break;
  case "user":
    userTweets(input)
    break;
}

