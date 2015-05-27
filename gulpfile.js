var gulp = require('gulp');

var del = require('del');
var liveServer = require("live-server");
var mainBowerFiles = require('main-bower-files');

var paths = {
  index: 'src/index.html',
  js: 'src/js/**/*.js'
};

gulp.task('clean:index', function (cb) {
  del('dist/index.html', cb);
});

gulp.task('clean:js', function (cb) {
  del('dist/js/', cb);
});

gulp.task('clean:bower', function (cb) {
  del('dist/bower_components/', cb);
});

gulp.task('dist:index', ['clean:index'], function () {
  return gulp.src(paths.index)
    .pipe(gulp.dest('dist/'));
});

gulp.task('dist:js', ['clean:js'], function () {
  return gulp.src(paths.js)
    .pipe(gulp.dest('dist/js/'));
});

gulp.task('dist:bower', ['clean:bower'], function () {
  return gulp.src(mainBowerFiles(), {base: 'src/bower_components/'})
    .pipe(gulp.dest('dist/bower_components/'));
});

gulp.task('watch', function () {
  gulp.watch(paths.index, ['dist:index']);
  gulp.watch(paths.js, ['dist:js']);
});

gulp.task('serve', function () {
  liveServer.start({
    port: 8080,
    host: "localhost",
    root: "src/",
    open: true
  });
});

gulp.task('serve:dist', function () {
  liveServer.start({
    port: 8080,
    host: "localhost",
    root: "dist/",
    open: true
  });
});

gulp.task('dist', ['dist:index', 'dist:js', 'dist:bower']);

gulp.task('distThenWatch', ['dist'], function () {
  gulp.run('watch');
});

gulp.task('default', ['distThenWatch'], function () {
  gulp.run('serve:dist');
});
