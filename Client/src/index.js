import * as Home from './Home/Home.hbs';
import * as ProductList from './controllers/productList/ProductList.hbs';
import { ProductListController, productEvent } from './controllers/productList/productListController';
import { headerEvent, HeaderLayoutController } from './layout/header/header';
import './style.scss';
import Handlebars from 'handlebars';
import { Router } from './modules/Router';
import * as Login from './controllers/login/login.hbs';
import * as Register from './controllers/register/register.hbs';
import './Home/Home.scss';
import { HomeController, afterViewInit } from './Home/Home';
import { Cart } from './controllers/cart/cart';


var rootElement = document.getElementById("root"); //Root element where page will render

let headerLayoutController = new HeaderLayoutController();


window.addEventListener('load', (event) => {
  OnIntialize();
});

function OnIntialize() {
  window.history.pushState("nextState", "nextTitle", '/home')
  render('home');
}

headerEvent.on('navigate', function (linkPath) {
  window.history.pushState("nextState", "nextTitle", '/' + linkPath);
  render(linkPath)
});


productEvent.on('selectCategory', function (catId) {
  getCurrentRouteForNavigation(catId);
});

headerEvent.on('headerCartUpdated', () => {
  console.log("Header Add to cart Triggered")
  getCurrentRouteForNavigation();

})
headerEvent.on('cartToggle', () => {
  console.log(" cart Triggered")
  getCurrentRouteForNavigation();
})

const routes = [
  {
    path: "home",
    template: Home,
    data: new HomeController()
  },
  {
    path: 'product',
    template: ProductList,
    data: new ProductListController()
  },
  {
    path: 'login',
    template: Login,
  },
  {
    path: 'register',
    template: Register,
  }
]


function render(route = "home") {
  let searchRoute = routes.find(eachRoute => eachRoute.path == route);
  let cuurentRouteData = {};
  if (searchRoute.data) {
    cuurentRouteData = searchRoute.data;
  }
  console.log(cuurentRouteData);
  rootElement.innerHTML = searchRoute.template({ cuurentRouteData, headerLayoutController })

  if (route == "home") {
    setTimeout(() => { afterViewInit() }, 0);
  }
}


function getCurrentRouteForNavigation(data = "") {
  let router = new Router();
  let linkPath = router.activatedRoute;
  let queryParam = ""
  if (data) {
    queryParam = '?categoryName=' + data
  }
  window.history.pushState("nextState", "nextTitle", '/' + linkPath + queryParam);
  render(linkPath)
}



