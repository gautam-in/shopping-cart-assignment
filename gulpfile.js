var gulp = require('gulp'),
sass = require('gulp-sass'),
 watch = require('gulp-watch');
 var flatten = require('gulp-flatten');

gulp.task('styles', function(){
return gulp.src(['src/**/*.scss','views/**/*.scss'])
.pipe(sass())
 .pipe(flatten())
      .pipe(gulp.dest('src/css'))
});
gulp.task('watch', function () {
	 gulp.watch(['src/sass/*.scss','views/**/*.scss'], gulp.series('styles'));
});

//Default task array
gulp.task('default', gulp.series('styles', 'watch'));




 
