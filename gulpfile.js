

var gulp = require('gulp'),
    jscs = require('gulp-jscs'),
    eslint = require('gulp-eslint'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename');

gulp.task('lint', function () {
    gulp.src(['src/*.js', '!node_modules/**/*.js'])
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('jscs', function () {
    gulp.src(['src/*.js', '!node_modules/**/*.js'])
        .pipe(jscs());
});

gulp.task('eslint', function () {
    return gulp.src(['src/*.js', '!node_modules/**/*.js'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.task('compress', function() {
  return gulp.src('src/*.js')
    .pipe(uglify())
    .pipe(rename(function (path) {
      path.basename = 'tracker';
      path.extname = '.min.js'
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('default', ['lint', 'jscs', 'eslint', 'compress']);
