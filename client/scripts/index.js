import "../styles/styles.scss";
import template from "../templates/layout.handlebars";
import LoginView from "./views/LoginView";
import RegisterView from "./views/RegisterView";

const loginInstance = new LoginView();
const registerInstance = new RegisterView();

(function () {
  function router() {
    const routes = [
      { path: "/", view: loginInstance },
      { path: "/login", view: loginInstance },
      { path: "/register", view: registerInstance },
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

    if (!match) {
      // If there is no match switch to default route '/'
      match = {
        route: routes[0],
        isMatch: true,
      };
    }

    const currentView = match.route.view;
    const preCompiledViewTemplate = currentView.getTemplate();
    const viewHtml = preCompiledViewTemplate({});
    document.querySelector("#route-content").innerHTML = viewHtml;
  }

  function navigateTo(url) {
    history.pushState(null, null, url);
    router();
  }

  window.addEventListener("popstate", (event) => {
    router();
  });

  document.addEventListener("DOMContentLoaded", () => {
    const html = template({});
    document.querySelector("#app-root").innerHTML = html;

    document.body.addEventListener("click", (e) => {
      if (e.target.matches("[data-link]")) {
        e.preventDefault();
        navigateTo(e.target.href);
      }
    });

    router();

    document
      .getElementById("loginForm")
      .addEventListener("submit", function (event) {
        event.preventDefault();
        loginInstance.onSubmitHandler();
      });
  });
})();
