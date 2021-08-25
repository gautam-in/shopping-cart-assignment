import { Header } from "./components/header.js";
import { Footer } from "./components/footer.js";
import { Slider } from "./components/slider.js";
import { CategorySections } from "./components/categorySections.js";
import { Login } from "./components/login.js";
import { SignUp } from "./components/signup.js";
import { Products } from "./components/products.js";
import { Cart } from "./components/cart.js";

import {
  getCategories,
  getHomePageData,
  getProducts,
} from "./utils/apiUtils.js";

import { initSlider } from "./utils/sliderUtils.js";

const headerEl = document.getElementById("header");
const footerEl = document.getElementById("footer");
const sliderEl = document.getElementsByClassName("main-slider")[0];
const categorySectionsEl = document.getElementById("category-sections");
const loginEl = document.getElementById("login-container");
const signUpEl = document.getElementById("signup-container");
const productsEl = document.getElementById("products-container");
const cartEl = document.getElementById("cart-container");

const renderHomePage = async () => {
  const { banners, categories } = await getHomePageData();
  sliderEl.innerHTML = Slider(banners);
  categorySectionsEl.innerHTML = CategorySections(categories);
  initSlider();
  document.querySelectorAll(".cat_explore").forEach((el) => {
    el.addEventListener("click", (event) => {
      localStorage.setItem(
        "currentCategoryId",
        event.target.dataset.categoryId
      );
    });
  });
};

const renderLoginPage = () => {
  loginEl.innerHTML = Login();
};

const renderSignUpPage = () => {
  signUpEl.innerHTML = SignUp();
};

const renderProductsPage = async () => {
  const prods = await getProducts();
  const categories = await getCategories();
  productsEl.innerHTML = Products(prods, categories);
  document.querySelectorAll("#category-item").forEach((el) => {
    el.addEventListener("click", (event) => {
      localStorage.setItem(
        "currentCategoryId",
        event.target.dataset.categoryId
      );
      window.location.reload();
    });
  });
};

const renderCartPage = async () => {
  cartEl.innerHTML = Cart();
};

headerEl.innerHTML = Header();

if (
  window.location.pathname === "/" ||
  window.location.pathname === "/index.html"
) {
  renderHomePage();
} else if (window.location.pathname === "/login.html") {
  renderLoginPage();
} else if (window.location.pathname === "/signup.html") {
  renderSignUpPage();
} else if (window.location.pathname === "/products.html") {
  renderProductsPage();
} else if (window.location.pathname === "/cart.html") {
  renderCartPage();
}

footerEl.innerHTML = Footer();
