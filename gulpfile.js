var gulp = require('gulp');
var webserver = require('gulp-webserver');

gulp.task('default', function () {
  // place code for your default task here
});

gulp.task('serve', function () {
  gulp.src('src')
    .pipe(webserver({
      livereload: true,
      open: 'index.html'
    }));
});
