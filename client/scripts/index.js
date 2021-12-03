import "../styles/styles.scss";

import Handlebars from "handlebars";
// var template = require("../templates/header.handlebars");
import template from "../templates/layout.handlebars";

(function () {
  var context = { title: "My New Post 12345", body: "This is my first post!" };
  var html = template(context);
  document.querySelector("#app-root").innerHTML = html; // Call multiple times to show different pages data

  // var source = document.getElementById("entry-template").innerHTML;
  // var template2 = Handlebars.compile(source);
  // // var context2 = { title: "My New Post 12345", body: "This is my first post!" };
  // var html2 = template2({});
  // document.querySelector("#route-content").innerHTML = html2;
})();
