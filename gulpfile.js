var gulp = require('gulp'),
sass = require('gulp-sass'),
 concat = require('gulp-concat'),
 watch = require('gulp-watch');
 var flatten = require('gulp-flatten');
 var clean = require('gulp-clean');

gulp.task('styles', function(){
return gulp.src(['src/sass/main.scss','src/sass/reset.scss','src/sass/grid.scss'])
.pipe(sass())
   .pipe(gulp.dest('src/css'))
});

gulp.task('concatcss', function() {
    return gulp.src(['src/**/*.css','!src/css/reset.css','!src/css/grid.css'])
        .pipe(concat('concat.css'))
        .pipe(gulp.dest('src/dest'));
});

gulp.task('watch', function () {
	 gulp.watch(['src/sass/*.scss','views/**/*.scss'], gulp.series('clean','styles'));
});
gulp.task('clean', function () {
    return gulp.src('src/css', {read: false,allowEmpty: true})
        .pipe(clean());
});

gulp.task('default', gulp.series( 'clean','styles','watch'));
 
