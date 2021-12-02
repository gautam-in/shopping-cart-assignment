import "../styles/styles.scss";

import Handlebars from "handlebars";
// var template = require("../templates/header.handlebars");
import template from "../templates/layout.handlebars";

(function () {
  //   var source = document.getElementById("entry-template").innerHTML;
  //   var template = Handlebars.compile(source);
  var context = { title: "My New Post 12345", body: "This is my first post!" };
  //   var context = {};
  var html = template(context);

  document.querySelector("#app-root").innerHTML = html;
})();
