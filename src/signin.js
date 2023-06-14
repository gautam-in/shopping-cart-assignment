const template = require("./templates/shared.handlebars");
import logo from "../static/images/logo.png";

document.addEventListener("DOMContentLoaded", async function () {
  const div = document.createElement("div");
  div.innerHTML = template({
    logo: logo,
    content: "Under Construction - Signin page",
  });

  document.body.appendChild(div);
});
