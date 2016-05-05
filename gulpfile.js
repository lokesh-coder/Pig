var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var ts = require('gulp-typescript');
var jspm = require('gulp-jspm-build');
var browserSync = require('browser-sync').create();

// browserSync

gulp.task('server:init', function () {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
});

gulp.task('server:reload', function () {
  return browserSync.reload;
});

// sass

gulp.task('sass:compile', function () {
  return gulp
    .src('app/**/*.scss', { base: './' })
    .pipe(sass())
    .pipe(gulp.dest('./'));
});

gulp.task('sass:watch', function () {
  return gulp
    .watch('app/**/*.scss', ['sass:compile', 'sass:move', 'server:reload']);
});

gulp.task('sass:move', function () {
  gulp.src('./app/core/style.css').pipe(gulp.dest('dist/css/'));
});

// typescript

gulp.task('ts:compile', function () {
  var tsconfig = ts.createProject('tsconfig.json');
  return tsconfig
    .src()
    .pipe(ts(tsconfig))
    .js
    .pipe(gulp.dest('dist'));
});

gulp.task('ts:watch', function () {
  return gulp
    .watch('app/**/*.ts', ['ts:compile']);
});

// bundle

gulp.task('js:bundle', function () {
  jspm({
    bundles: [
      { src: './dist/bootstrap.js', dst: 'app.min.js' }
    ]
  })
    .pipe(gulp.dest('dist'));
});


// watch all

gulp.task('all:watch', ['sass:watch', 'ts:watch']);

// compile all

gulp.task('all:compile', ['sass:compile', 'ts:compile']);

// default

gulp.task('default', ['server:init', 'all:compile', 'all:watch']);