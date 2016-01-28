

var gulp = require('gulp'),
    jscs = require('gulp-jscs'),
    jshint = require('gulp-jshint');
    
    
gulp.task('lint', function () {
    gulp.src('**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('jscs', function () {
    gulp.src('**/*.js')
        .pipe(jscs());
});

gulp.task('default', ['lint', 'jscs']);

