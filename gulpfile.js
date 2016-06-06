// require dependencies
var gulp = require('gulp'),
    gutil = require('gulp-util'),
    connect = require('gulp-connect'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    cleanCSS = require('gulp-clean-css'),
    rename = require('gulp-rename');

// declare variables
htmlSrc = ['app/*.html'];
sassSrc = ['assets/sass/style.scss'];
jsSrc = ['assets/js/script.js'];

// create build tasks
gulp.task('html', function () {
    gulp.src(htmlSrc)
        .pipe(connect.reload());
});

gulp.task('sass', function () {
    return gulp.src(sassSrc)
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({browsers: ['last 2 versions']}))
        .pipe(cleanCSS())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('app/css'))
        .pipe(connect.reload());
});

gulp.task('js', function () {
    gulp.src(jsSrc)
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('app/js'))
        .pipe(connect.reload());
});

// create server to watch changes
gulp.task('connect', function () {
    connect.server({
        root: 'app',
        livereload: true
    });
});

// watcher
gulp.task('watch', function () {
    gulp.watch(htmlSrc, ['html']);
    gulp.watch('assets/sass/**/*.scss', ['sass']);
    gulp.watch(jsSrc, ['js']);
});

// default task
gulp.task('default', ['connect', 'html', 'sass', 'js', 'watch']);