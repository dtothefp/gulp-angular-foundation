var gulp       = require('gulp');
var livereload = require('gulp-livereload');

gulp.task('watch', function(){
	gulp.watch('src/{config,services,modules,primitives}/{,**/}*.js', ['scripts']);
	gulp.watch('src/{sass,modules,primitives}/{,**/}*.scss', ['sass']);
  gulp.watch('src/{modules,primitives}/{,**/}*.html', ['templates']);
	gulp.watch('src/images/**', ['images']);
	livereload();
});
