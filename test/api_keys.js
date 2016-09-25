'use strict';
require('dotenv').config

let chai = require('chai');
const expect = chai.expect;


describe("API keys", () => {
  it("has the keys loaded", () => {
    expect(process.env.CONSUMER_KEY).to.be.ok
    expect(process.env.CONSUMER_SECRET).to.be.ok
    expect(process.env.ACCESS_TOKEN).to.be.ok
    expect(process.env.TOKEN_SECRET).to.be.ok
  })
})
