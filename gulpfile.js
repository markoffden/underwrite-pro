// Require Dependencies
var gulp = require('gulp'),
    gutil = require('gulp-util'),
    browserify = require('gulp-browserify'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat');

// Source Variables
sassSrc = ['assets/sass/style.scss'];

// Create Tasks
gulp.task('sass', function () {
    return gulp.src('assets/sass/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('builds/development/css'));
});

gulp.task('watch', function () {
    gulp.watch('assets/sass/**/*.scss', ['sass']);
    gutil.log('Gulp is watching...');
});