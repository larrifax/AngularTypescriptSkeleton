declare var require;

var gulp = require('gulp');
var karma = require('gulp-karma');
var prot = require('gulp-protractor').protractor;

var karmaFiles = ['non_existing_file.js'];
var e2eFiles = ['app/**/*_e2e.js'];


gulp.task('test', () => {
    return gulp.src(karmaFiles).pipe(karma({
        configFile: 'karma.conf.js',
        action: 'run'
    })).on('error', err=> {
       throw err;
    });
});

gulp.task('e2e', () => {
    return gulp.src(e2eFiles)
        .pipe(prot({
            configFile: "protractor_conf.js",
            args: ['--baseUrl', 'http://localhost:61916']
        }))
        .on('error', e=> { throw e; });
});

gulp.task('e2edebug', () => {
    return gulp.src(e2eFiles)
        .pipe(prot({
            configFile: "protractor_conf.js",
            args: ['debug', '--baseUrl', 'http://localhost:61916']
        }))
        .on('error', e=> { throw e; });
});

gulp.task('default', ()=> {
    gulp.src(karmaFiles).pipe(karma({
        configFile: 'karma.conf.js',
        action: 'watch'
    }));
});