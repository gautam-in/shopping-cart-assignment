const gulp = require("gulp");

// import tasks
const img = require("./gulp_tasks/images");
// const server = require("./gulp_tasks/browsersync.js");
// import other tasks here

// Watch files
function watchFiles() {
  // gulp.watch("./src/assets/img/**/*", img.resize);
  gulp.watch("./static/images/**/*", img.resize);
}

// compose tasks (massively simplified here)
// const watch = gulp.parallel(watchFiles, server.init);
const watch = gulp.parallel(watchFiles);
const build = img.resize;

// export tasks
exports.watch = watch;
exports.build = build;