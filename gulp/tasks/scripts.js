var gulp         = require('gulp');
var concat       = require('gulp-concat');
var livereload   = require('gulp-livereload');
var notify       = require('gulp-notify');
var handleErrors = require('../util/handleErrors');
var jshint     = require('gulp-jshint');
var ngmin      = require('gulp-ngmin');

// gulp.task('scripts', function() {
//     gulp.src(['./src/config/{,**/}.*js', './src/services/{,**/}*.js', './src/modules/**/*.js', './src/primitives/**/*.js'])
//         .pipe(gulp.dest('./build/js'))
//         .on('error', handleErrors)
//         .pipe(livereload());
// });

gulp.task('scripts', function() {
    return gulp.src(['./src/config/{,**/}*.js', './src/services/{,**/}*.js', './src/modules/**/*.js', './src/primitives/**/*.js'])
        //.pipe(jshint())
        //.pipe(jshint.reporter('default'))
        .pipe(concat('app.js'))
        //.pipe(ngmin({dynamic: true}))
        .pipe(gulp.dest('./build/js'))
        .on('error', handleErrors)
        .pipe(livereload());
});
