'use strict';

let chai = require('chai');
const expect = chai.expect;


describe("API keys", () => {
  it("has the keys loaded", () => {
    expect(process.env.CONSUMER_KEY).to.not.be.nil
  })
})
