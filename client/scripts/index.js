import "../styles/styles.scss";

import Handlebars from "handlebars";
// var template = require("../templates/header.handlebars");
import template from "../templates/layout.handlebars";

(function () {
  var context = {
    page: "register",
    title: "My New Post 12345",
    body: "This is my first post!",
  };
  var html = template(context);
  document.querySelector("#app-root").innerHTML = html; // Call multiple times to show different pages data

  // var source = document.getElementById("entry-template").innerHTML;
  // var template2 = Handlebars.compile(source);
  // // var context2 = { title: "My New Post 12345", body: "This is my first post!" };
  // var html2 = template2({});
  // document.querySelector("#route-content").innerHTML = html2;

  function router() {
    const routes = [
      { path: "/", view: () => console.log("Viewing Home") },
      { path: "/login", view: () => console.log("Viewing Login") },
      { path: "/register", view: () => console.log("Viewing Register") },
    ];

    // Test each route for potential match
    const potentialMatches = routes.map((route) => {
      return {
        route: route,
        isMatch: location.pathname === route.path,
      };
    });

    let match = potentialMatches.find(
      (potentialMatch) => potentialMatch.isMatch
    );

    console.log(match);
  }

  document.addEventListener("DOMContentLoaded", () => {
    router();
  });
})();
