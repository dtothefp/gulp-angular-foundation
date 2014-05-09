// var connect = require('connect');
var gulp    = require("gulp");
var nodemon = require('gulp-nodemon');


gulp.task('develop', function () {
  nodemon({
    script: 'app.js',
    ext: 'js',
    ignore: ['./public'],
    nodeArgs: ['--debug=9999']
  })
  .on('restart', function () {
    console.log('restarted!')
  })
})
