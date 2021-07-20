const router = require("./routes/router");
router.initRoutings();

window.addEventListener("hashchange", function (event) {
  event.preventDefault();
  router.initRoutings();
});
