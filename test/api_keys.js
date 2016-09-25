'use strict';
require('dotenv').config();

let chai = require('chai');
const expect = chai.expect;


describe("API keys", () => {
  it("has the keys loaded", () => {
    expect(process.env.CONSUMER_KEY).to.exist
    expect(process.env.CONSUMER_SECRET).to.exist
    expect(process.env.ACCESS_TOKEN).to.exist
    expect(process.env.TOKEN_SECRET).to.exist
  })
})
