import "../styles/styles.scss";
import { Carousel } from "bootstrap";
import template from "../templates/layout.handlebars";
import HomeView from "./views/HomeView";
import LoginView from "./views/LoginView";
import RegisterView from "./views/RegisterView";
import ProductsView from "./views/ProductsView";

const loginInstance = new LoginView();
const registerInstance = new RegisterView();
const homeInstance = new HomeView();
const productsInstance = new ProductsView();

(function () {
  let currentPath = null;
  async function router() {
    const routes = [
      { path: "/", view: homeInstance },
      { path: "/login", view: loginInstance },
      { path: "/register", view: registerInstance },
      { path: "/products", view: productsInstance },
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
    currentPath = match.route.path;
    const viewHtml = await currentView.getTemplate();
    document.querySelector("#route-content").innerHTML = viewHtml;

    addEventListenersOnCurrentView(currentPath);
  }

  function addEventListenersOnCurrentView(currentPath) {
    switch (currentPath) {
      case "/":
        break;
      case "/login":
        document
          .getElementById("loginForm")
          .addEventListener("submit", loginOnSubmit);
        break;
      case "/register":
        document
          .getElementById("registerForm")
          .addEventListener("submit", registerOnSubmit);
        break;
      case "/products":
        break;
      default:
        break;
    }
  }

  function cleanUpMemory(previousPath) {
    switch (previousPath) {
      case "/":
        break;
      case "/login":
        document
          .getElementById("loginForm")
          .removeEventListener("submit", loginOnSubmit);
        break;
      case "/register":
        document
          .getElementById("registerForm")
          .removeEventListener("submit", registerOnSubmit);
        break;
      case "/products":
        break;
      default:
        break;
    }

    removeLinkActiveClass();
  }

  function removeLinkActiveClass() {
    document.querySelectorAll("[data-link]").forEach((element) => {
      element.classList.remove("link-active");
    });
  }

  function loginOnSubmit(event) {
    event.preventDefault();
    loginInstance.onSubmitHandler();
  }

  function registerOnSubmit(event) {
    event.preventDefault();
    registerInstance.onSubmitHandler();
  }

  function navigateTo(url) {
    if (url !== location.href) {
      cleanUpMemory(currentPath);
      history.pushState(null, null, url);
      router();
    }
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
      } else if (e.target.matches(".category-name")) {
        const activeCategory = document.querySelector(".category-name.active");
        if (activeCategory) {
          activeCategory.classList.remove("active");
        }
        e.target.classList.add("active");
        productsInstance.filterProductsBasedOnCategory(e.target.dataset.id);
      }
    });

    router();
  });
})();
