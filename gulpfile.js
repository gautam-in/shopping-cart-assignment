var gulp = require('gulp'),
webserver = require('gulp-webserver'),
sass = require('gulp-sass');
gulp.task('webserver', function() {
    gulp.src('/')
      .pipe(webserver({
        livereload: true,
        directoryListing: true,
        open: true,
        port: '8080'
      }));
  });
  gulp.task("sass", function () {
       gulp.src("style/*.scss") 
       .pipe(sass().on("error", sass.logError)) 
       .pipe(gulp.dest("style")); 
    });