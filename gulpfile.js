var gulp = require('gulp'),
sass = require('gulp-sass'),
 concat = require('gulp-concat'),
 watch = require('gulp-watch');
 var flatten = require('gulp-flatten');
 var clean = require('gulp-clean');

gulp.task('styles', function(){
return gulp.src(['src/**/*.scss','views/features/**/*.scss'])
.pipe(sass())
 .pipe(flatten())
      .pipe(gulp.dest('src/css'))
});

gulp.task('concatcss', function() {
    return gulp.src(['src/**/*.css','!src/css/reset.css','!src/css/ngrid.css'])
        .pipe(concat('concat.css'))
        .pipe(gulp.dest('src/dest'));
});

gulp.task('watch', function () {
	 gulp.watch(['src/sass/*.scss','views/**/*.scss'], gulp.series('styles','clean','concatcss'));
});
gulp.task('clean', function () {
    return gulp.src('src/dest', {read: false,allowEmpty: true})
        .pipe(clean());
});

//Default task array
gulp.task('default', gulp.series('styles', 'clean','concatcss','watch'));




 
