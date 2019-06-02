var gulp = require('gulp');
var DIST_PATH = 'resources/css';

gulp.task('styles', function(){
    var sass = require('gulp-sass');
    return gulp.src(["resources/scss/**/*"])
      .pipe(sass()) // Converts Sass to CSS with gulp-sass
      .pipe(gulp.dest(DIST_PATH))
});

gulp.task('handlebars', function () {
  var handlebars = require('gulp-compile-handlebars');
  var ext = require('gulp-ext');
  return gulp.src(["views/pages/*.hbs"])
      .pipe(handlebars())
      .pipe(ext.replace('html'))
      .pipe(gulp.dest('views/'));
});

gulp.task('webserver', function() {
  var webserver = require('gulp-webserver');
  gulp.src('/')	// <-- your app folder
    .pipe(webserver({
      livereload: true,
      open: true,
      port: 3000,	// set a port to avoid conflicts with other local apps
      open: 'http://localhost:3000/views/dummy.html'
    }));
});



//Default task array
gulp.task("default", gulp.series('styles','handlebars','webserver'));
