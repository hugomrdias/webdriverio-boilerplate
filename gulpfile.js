'use strict';

var gulp = require('gulp');
var webdriver = require('gulp-webdriver');
var selenium = require('selenium-standalone');

gulp.task('selenium', function(done) {
    selenium.install({
        logger: function(message) {}
    }, function(err) {
        if (err) return done(err);
        selenium.start(function(err, child) {
            if (err) return done(err);
            selenium.child = child;
            done();
        });
    });
});

gulp.task('webdriver', ['selenium'], function() {
    return gulp.src('wdio.conf.js').pipe(webdriver());
});

gulp.task('test', ['webdriver'], function() {
    selenium.child.kill();
});
