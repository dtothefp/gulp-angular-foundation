var gulp       = require('gulp');
var livereload = require('gulp-livereload');

gulp.task('watch', function(){
	gulp.watch('./public/src/angular/{config,services,modules,primitives}/{,**/}*.js', ['scripts']);
  gulp.watch('./public/src/js/{,**/}*.js', ['scripts']);
	gulp.watch('./public/src/angular/{sass,modules,primitives}/{,**/}*.scss', ['sass']);
  gulp.watch('./public/src/sass/{,**/}*.scss', ['sass']);
  gulp.watch('./public/src/angular/{modules,primitives}/{,**/}*.html', ['templates']);
	gulp.watch('./public/src/images/**', ['images']);
	livereload();
});
