var gulp = require('gulp');

gulp.task('styles', function(){
    var sass = require('gulp-sass');
    return gulp.src(["resources/scss/**/*"])
      .pipe(sass()) // Converts Sass to CSS with gulp-sass
      .pipe(gulp.dest('resources/css'))
});

// gulp.task('handlebars', function () {
//   var handlebars = require('gulp-compile-handlebars');
//   var ext = require('gulp-ext');
//   var options = {
//     partials : ['views/partials'],
//     batch : ['views/partials']
//   }
//   return gulp.src(["views/*.hbs"])
//       .pipe(handlebars(null, options));
//       // .pipe(ext.replace('html'))
//       // .pipe(gulp.dest('views/'));
// });

//Default task array
gulp.task("default", gulp.series('styles'));

