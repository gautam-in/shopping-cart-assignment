const gulp = require("gulp");
const path = require("path");
const sass = require("gulp-sass");

const settings = {
    sources: {
        scss:  __dirname + "/static/scss/**/*"
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
    gulp.src(settings.sources.scss)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(settings.destination.css));
});