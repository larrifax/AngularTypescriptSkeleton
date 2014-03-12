/// <reference path="Scripts/typings/node/node.d.ts" />

var gulp = require('gulp');
var karma = require('gulp-karma');

var testFiles = [
    'client/todo.js',
    'client/todo.util.js',
    'client/todo.App.js',
    'test/client/*.js'
];

gulp.task('test', () => {
    return gulp.src(testFiles)
        .pipe(karma({
            configFile: 'karma.conf.js',
            action: 'run'
        })).on('error', err=> {
            throw err;
        });
});

gulp.task('default', ()=> {
    gulp.src(testFiles)
        .pipe(karma({
            configFile: 'karma.conf.js',
            action: 'watch'
        }));
});