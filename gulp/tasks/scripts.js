var gulp         = require('gulp');
var concat       = require('gulp-concat');
var notify       = require('gulp-notify');
var handleErrors = require('../util/handleErrors');
var jshint       = require('gulp-jshint');
var ngmin        = require('gulp-ngmin');
var order        = require('gulp-order');
var es           = require('event-stream');
var streamqueue  = require('streamqueue');

gulp.task('scripts', function() {
    return streamqueue({ objectMode: true },
        gulp.src('./public/src/angular/config/config.js'),
        gulp.src(['./public/src/angular/config/global/**/*.js']),
        gulp.src('./public/src/angular/services/**/*.js'),
        gulp.src('./public/src/angular/modules/**/*.js'),
        gulp.src('./public/src/angular/primitives/**/*.js'),
        gulp.src('./public/src/js/**/*.js')
    )
        .pipe(concat('app.js'))
        .pipe(gulp.dest('./public/build/js'))
        .on('error', handleErrors);
});
