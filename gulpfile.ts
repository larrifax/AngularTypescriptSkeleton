declare var require;

var gulp = require('gulp');
var karma = require('gulp-karma');
var prot = require('gulp-protractor').protractor;
var tslint = require('gulp-tslint');

var paths = {
    scripts_ts: "App/**/*.ts",
    scripts_js: "App/**/*.js",
    scripts_unit_tests_ts: "App/**/*.spec.ts",
    scripts_unit_tests_js: "App/**/*.spec.js",
    scripts_integration_tests_ts: "App/**/*.e2e.ts",
    scripts_integration_tests_js: "App/**/*.e2e.js",
};


gulp.task('test', () => {
    return gulp.src('non_existing_file.js').pipe(karma({
        configFile: 'karma.conf.js',
        action: 'run'
    })).on('error', err=> {
       throw err;
    });
});

gulp.task('e2e', () => {
    return gulp.src(paths.scripts_integration_tests_js)
        .pipe(prot({
            configFile: "protractor_conf.js",
            args: ['--baseUrl', 'http://localhost:61916']
        }))
        .on('error', e=> { throw e; });
});

gulp.task('e2edebug', () => {
    return gulp.src(paths.scripts_integration_tests_js)
        .pipe(prot({
            configFile: "protractor_conf.js",
            args: ['debug', '--baseUrl', 'http://localhost:61916']
        }))
        .on('error', e=> { throw e; });
});

gulp.task('tslint', () => {
    gulp.src(paths.scripts_ts)
        .pipe(tslint())
        .pipe(tslint.report('verbose'));
});

gulp.task('watch', () => {
    gulp.src('non_existing_file.js').pipe(karma({
        configFile: 'karma.conf.js',
        action: 'watch'
    }));

    gulp.watch(paths.scripts_ts, ['tslint']);
});

gulp.task('default', ['watch']);