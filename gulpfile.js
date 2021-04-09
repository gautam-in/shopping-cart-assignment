const gulp = require('gulp'),
  sass = require('gulp-sass'),
  autoprefixer = require('gulp-autoprefixer'),
  minifyCss = require('gulp-clean-css');

const settings = {
    sources: {
        scss:  __dirname + "/static/scss/**/*.scss"
    },
    destination: {
        css: __dirname + "/static/css/"
    }
};

gulp.task('default', function(){
    console.log("default task");
});

// Add task to compile scss code inot css code
gulp.task('scss-css', function(){
   return gulp.src(settings.sources.scss)
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer('last 2 versions'))
    .pipe(minifyCss())
    .pipe(gulp.dest(settings.destination.css));
});