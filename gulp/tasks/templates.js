var changed    = require('gulp-changed');
var gulp       = require('gulp');
var path       = require('path');
var rename     = require('gulp-rename');

gulp.task('templates', function() {
  return gulp.src(['./public/src/angular/modules/**/*.html', './public/src/angular/primitives/**/*.html'])
        .pipe(changed('./public/build/js'))
        .pipe(rename(function(path) {
          // var prefix = path.dirname.replace(/\//, "");
          // path.basename = prefix + "-" + path.basename;
          path.dirname = "";
        }))
        .pipe(gulp.dest('./public'));
});
