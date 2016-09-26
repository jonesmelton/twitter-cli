'use strict';
require('dotenv').config();
const Twit = require('twit');

const chai = require('chai');
const expect = chai.expect;

const T = new Twit({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.TOKEN_SECRET,
})

describe("API keys", () => {
  it("has the keys loaded", () => {
    expect(process.env.CONSUMER_KEY).to.exist
    expect(process.env.CONSUMER_SECRET).to.exist
    expect(process.env.ACCESS_TOKEN).to.exist
    expect(process.env.TOKEN_SECRET).to.exist
  })
})
