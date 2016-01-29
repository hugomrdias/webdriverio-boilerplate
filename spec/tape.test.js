'use strict';

var wdio = require('webdriverio');
var test = require('tape');
var browser = wdio.remote({
    desiredCapabilities: {
        browserName: 'chrome'
    }
});

test('should visit webdriver', function(t) {
    t.plan(1);
    browser.init()
        .url('/')
        .getTitle().then(function(title) {
            t.equal(title, 'WebdriverIO - Selenium 2.0 javascript bindings for nodejs');
        })
        .end();
});

test('should visit DuckDuckGo', function(t) {
    t.plan(1);
    browser.init()
        .url('https://duckduckgo.com/')
        .getTitle().then(function(title) {
            t.equal(title, 'DuckDuckGo22');
        })
        .end();
});

test('should visit google', function(t) {
    t.plan(1);
    browser.init()
        .url('https://google.com/')
        .getTitle().then(function(title) {
            t.equal(title, 'Google');
        })
        .end();
});
