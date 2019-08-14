import Messages from './models/Messages';
import { routes } from './routes/base';
import { elements } from './views/base';
import { renderLogin } from './views/loginView';
import { renderSignup } from './views/signupView';
import { renderProducts } from './views/ProductsView';



/** Global state of the app
 * - Message
 */
const state = {};


/**
 * Routes CONTROLLER
 */
const registerRoutes = (() => {
  if (!state.routes) {
    state.routes = routes;
  }
  routes.login.addEventListener('click', e => {
    // Load Login View
    renderLogin();
  });

  routes.signup.addEventListener('click', e => {
    // Load Register View
    renderSignup();
  });

  routes.products.addEventListener('click', e => {
    // Load Register View
    renderProducts();
  });

})();

/**
 * MESSAGE CONTROLLER
 */
const controlMessage = (() => {
  if (!state.notify) {
    state.notify = new Messages();
  }

})();

console.log(state);
