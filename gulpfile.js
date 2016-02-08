

var gulp = require('gulp'),
    jscs = require('gulp-jscs'),
    eslint = require('gulp-eslint'),
    jshint = require('gulp-jshint');
    
    
gulp.task('lint', function () {
    gulp.src(['**/*.js', '!node_modules/**/*.js'])
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('jscs', function () {
    gulp.src(['**/*.js', '!node_modules/**/*.js'])
        .pipe(jscs());
});

gulp.task('eslint', function () {
    return gulp.src(['**/*.js', '!node_modules/**/*.js'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.task('default', ['lint', 'jscs', 'eslint']);

