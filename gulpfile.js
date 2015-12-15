var gulp       = require('gulp');
var babel      = require('gulp-babel');
var sass       = require('gulp-sass');
var source     = require('vinyl-source-stream');
var browserify = require("browserify");

gulp.task('default', ['watch']);

gulp.task('watch', ['build'], function () {
  gulp.watch('./app/styles/**/*.scss', ['sass']);
  gulp.watch('./app/scripts/**/*.js', ['js']);
});

gulp.task('build', ['sass', 'js']);

gulp.task('js', function() {
  browserify({
    entries: './app/scripts/index.js',
    extensions: 'js',
    debug: true
  })
  .transform('babelify', { presets: ['es2015', 'react'] })
  .bundle()
  .pipe(source('bundle.js'))
  .pipe(gulp.dest('.'));
});

gulp.task('sass', function() {
  gulp.src('./app/styles/main.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(sass({outputStyle: 'compressed'}))
      .pipe(gulp.dest('.'));
});
