const Handlebars = require("handlebars/runtime");

module.exports = function (fn) {
  return new Handlebars.SafeString(
    "(" + fn.toString().replace(/\"/g, "'") + ")()"
  );
};
