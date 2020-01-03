var gulp = require('gulp'),
    sass = require('gulp-sass');

gulp.task('styles', function() {
    return gulp.src(['src/styles/common/index.scss'])
        .pipe(sass()) // Converts Sass to CSS with gulp-sass
        .pipe(gulp.dest('src/css'))
});


//Default task array
gulp.task("default", gulp.series('styles'));