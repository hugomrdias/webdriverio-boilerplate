'use strict';

var assert = require('assert');

describe('my feature', function() {
    it('will do something', function(done) {
        browser
            .url('/')
            .getTitle().then(function(title) {
                console.log(title);
                assert.equal(title, 'WebdriverIO - Selenium 2.0 javascript bindings for nodej');
            })
            .call(done);
    });
});
