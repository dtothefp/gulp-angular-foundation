var gulp        = require('gulp');
var bowerFiles  = require('gulp-bower-files');
var inject      = require('gulp-inject');
var concat      = require('gulp-concat');
var es          = require('event-stream');
var files = require('bower-files');

gulp.task('bower', function() {
  gulp.src('./public/index.html')
  .pipe(inject(bowerFiles({read: false}), {ignorePath: '/public'}))
  .pipe(gulp.dest('./public/'));
//    gulp.src(files.js)
//        .pipe(concat('lib.min.js'))
//        .pipe(gulp.dest('public/build/js'));
});


