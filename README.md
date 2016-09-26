
# Dependencies

  * [Node.js](https://nodejs.org/en/) and NPM which is bundled with it.
  * For interacting with the REST API we're using [Twit](https://github.com/ttezel/twit), which will be installed automatically by NPM

# Setup

  1. Unzip the contents and enter the ```twitter-cli``` directory.
  1. Open your terminal, navigate to the directory created by unzipping the .zip, and run ```npm install```
  2. Create a file called ```.env``` to hold your API keys. The file will be hidden, use ```ls -a``` to see all files.
  3. Add your API keys to ```.env``` they should be in the following format:
  ```
    CONSUMER_KEY=aHvKZtiGPC+bPKDEiMNXrsJHrGcqdBsi
    CONSUMER_SECRET=bJxMr6Lm7mcMVdvXCXuEJP6mhcP0LL+0
    ACCESS_TOKEN=eCty4zKFtsJnWkIhHkE8vGGkUsi1Jzhf
    TOKEN_SECRET=61DrgijjSJFqvDfvIkWVnjfLJ8cqRBNc
    ```

    The names on the left must be exactly these. Note that there are no spaces or quotes in this file, it should look just like this. Also these keys are fake don't try to use them.

# Usage

  1. Enter folder where you put the program and run ```npm test``` to verify that your API keys are loaded. You should see "1 Passing" in green. If not, your keys aren't in the right file or don't have the right syntax or naming convention.
  2. Run ```node index.js <command> <arguments>```
      * For example ```node index.js tweet clams are great``` will post "clams are great" to your public timeline, right now.
      * ```node index.js search dat boi``` will search for all public tweets containing the phrase "dat boi". I set it to return 100 tweets for now. You can set it to whatever but the API has a hard limit of 200 returns from a search.
      * ```node index.js user drake``` will return the public timeline of @drake.
      * ```node index.js followers``` will return all your followers. Likewise following and retweets will return your own, so there's no need for the second argument.

# Info

  * I'm using ES6 notation for anonymous functions, which will look weird if you're not used to it. Instead of ```function(foo) { return foo }``` we can just write ```(foo) => { return foo }```
  * The Twit wrapper is pretty straightforward. If you want to add new functions you can use mine as examples and just reference the Twitter API docs for the REST route and what params to pass in via the options object.
  * I have one test that checks that API keys are loaded from the .env file. It only tests that SOMETHING was loaded for each key, it does not check that the keys are actually valid.
