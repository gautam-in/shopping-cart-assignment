import "../styles/_main.scss";
import Header from "../components/header";
import Footer from "../components/footer";
import Error404 from "../components/error404/error404";
import Login from "../pages/auth/login/login";
import Register from "../pages/auth/register/register";
import Home from "../pages/home/home";
import { parseRequestUrl } from "../components/util";
import ProductList from "../pages/productlist/productlist";
import CartModal from "../components/cartModal/cartModal";
import { TOKEN_KEY } from "../constant";
import { privateRoutes } from "../routes";
import { replaceHtml } from "../helpers";

const routes = {
  "/": Login,
  "/register": Register,
  "/home": Home,
  "/productlist/:id": ProductList,
  "/productlist": ProductList,
};

export const renderHeader = async () => {
  let header = document.getElementById("header-container");
  header = replaceHtml(header, await Header.render());
  if (Header.reRender) {
    await Header.reRender();
  }
};

const router = async () => {
  const request = parseRequestUrl();
  const parseUrl =
    (request.resource ? `/${request.resource}` : "/") +
    (request.id ? "/:id" : "") +
    (request.verb ? `/${request.verb}` : "");

  const screen = routes[parseUrl] ? routes[parseUrl] : Error404;

  const isUserAuthorized = () => {
    const token = window.localStorage.getItem(TOKEN_KEY);
    let appToken = JSON.parse(token || "{}");
    if (
      privateRoutes.includes(request.resource) &&
      Object.keys(appToken).length === 0
    ) {
      window.location.href = "/";
      return;
    }
  };

  const renderContent = async () => {
    try {
      let main = document.getElementById("main-container");
      main = replaceHtml(main, await screen.render());
      if (screen.reRender) {
        await screen.reRender();
      }
      isUserAuthorized();
    } catch (e) {
      console.log("ERROR WHILE PARSING CODE", e);
    }
  };

  const renderFooter = async () => {
    let footer = document.getElementById("footer-container");
    footer = replaceHtml(footer, await Footer.render());
  };

  await renderHeader();
  await renderContent();
  await renderFooter();
};

window.addEventListener("load", router);
window.addEventListener("hashchange", router);
window.addEventListener("locationchange", router);
