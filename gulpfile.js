// var gulp = require('gulp'),
//     sass = require('gulp-sass');
// gulp.task('styles', function(){
//     return gulp.src(["resources/scss/**/*"])
//       .pipe(sass()) // Converts Sass to CSS with gulp-sass
//       .pipe(gulp.dest('resources/css'))
// });

// //Default task array
// gulp.task("default", gulp.series('styles'));


/**
  * This file contains the gulp task to concat all .scss files, convert it to .css, add vendor prefixes and minify
**/
var gulp = require('gulp'),
  sass = require('gulp-sass'),
  autoprefixer = require('gulp-autoprefixer'),
  minifyCss = require('gulp-clean-css');

gulp.task('sass', function () {
  return gulp.src('resources/scss/*.scss')
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(minifyCss())
    .pipe(gulp.dest('build/css'));
});

//Default task array
gulp.task("default", gulp.series('sass'));
