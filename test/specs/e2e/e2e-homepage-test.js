const assert = require('assert');

describe('fixture', function() {
  it('has the expected page title', function() {
    browser.url('/');
    assert.equal(browser.getTitle(), 'My Test Wordpress Website - Just another WordPress site');
  });
});
