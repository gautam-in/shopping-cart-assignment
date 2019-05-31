var gulp = require('gulp');
var sass = require('gulp-sass');
var webserver = require('gulp-webserver');

var DIST_PATH = 'resources/css';

gulp.task('styles', function(){
    return gulp.src(["resources/scss/**/*"])
      .pipe(sass()) // Converts Sass to CSS with gulp-sass
      .pipe(gulp.dest(DIST_PATH))
});


gulp.task('webserver', function() {
  gulp.src('/')	// <-- your app folder
    .pipe(webserver({
      livereload: true,
      open: true,
      port: 3000,	// set a port to avoid conflicts with other local apps
      open: 'http://localhost:3000/views/home.html'
    }));
});

//Default task array
gulp.task("default", gulp.series('styles','webserver'));
