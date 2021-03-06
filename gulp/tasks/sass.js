var sass         = require('gulp-sass');
var gulp         = require('gulp');
var notify       = require('gulp-notify');
var handleErrors = require('../util/handleErrors');
var concat       = require('gulp-concat');
var order        = require('gulp-order');
var streamqueue  = require('streamqueue');

gulp.task('sass', function() {
  return streamqueue({ objectMode: true },
        gulp.src('./public/src/sass/app.scss'),
        gulp.src('./public/src/angular/**/*.scss')
    )
        .pipe(concat('app.css'))
        .pipe(sass({includePaths: [
          './public/bower_components/foundation/scss',
          './node_modules/node-bourbon/assets/stylesheets',
          './public/bower_components/saffron/saffron'
          ]
        }))

        .pipe(gulp.dest('./public/build/css'))
        .on('error', handleErrors)
});
