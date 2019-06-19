// var gulp = require('gulp'),
// sass = require('gulp-sass');
// gulp.task("sass", function () {
//   gulp.src("style/*.scss") 
//   .pipe(sass()) 
//   .pipe(gulp.dest("style/css")); 
// });
// gulp.task('sass', function () {
//   console.log("I am here");
//   gulp.src('style/*.scss')
//       .pipe(sass())
//       .pipe(gulp.dest('style'))
// });
// gulp.task('default', function(done) { 
//     gulp.series('sass')
//     console.log("sdjfhsajkf");
//     done();
// })

var gulp = require('gulp'),
sass = require('gulp-sass');
gulp.task('styles', function(){
return gulp.src(['style/*.scss'])
.pipe(sass()) // Converts Sass to CSS with gulp-sass
      .pipe(gulp.dest('style'))
});

//Default task array
gulp.task("default", gulp.series('styles')); 
 
