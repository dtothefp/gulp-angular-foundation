var changed    = require('gulp-changed');
var gulp       = require('gulp');
var livereload = require('gulp-livereload');
var path       = require('path');
var rename     = require('gulp-rename');

gulp.task('templates', function() {
  var dest = './build/js';
  return gulp.src(['./src/modules/**/*.html', './src/primitives/**/*.html'])
        .pipe(changed(dest))
        .pipe(rename(function(path) {
          // var prefix = path.dirname.replace(/\//, "");
          // path.basename = prefix + "-" + path.basename;
          path.dirname = "";
        }))
        .pipe(gulp.dest(dest))
        .pipe(livereload());
});
