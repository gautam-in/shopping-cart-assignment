var gulp = require('gulp');

gulp.task('styles', function(){
    var sass = require('gulp-sass');
    return gulp.src(["resources/scss/**/*"])
      .pipe(sass()) // Converts Sass to CSS with gulp-sass
      .pipe(gulp.dest('resources/css'))
});

//Default task array
gulp.task("default", gulp.series('styles'));

