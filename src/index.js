import { home } from "./views/home";
import { products } from "./views/products";
import { cart } from "./views/cart";
import { register } from "./views/register";
import { login } from "./views/login";
import { navbar } from "./navbar";
import { route, template } from "./router";
import "normalize.css/normalize.css"
import "../styles/base.scss";
import "materialize-css/dist/css/materialize.min.css"
import "materialize-css/dist/js/materialize.min.js"


const app_div = document.getElementById('app');

const nav_div = document.createElement('div');
nav_div.id = 'nav';
app_div.appendChild(nav_div);
app_div.innerHTML = navbar();

const content_div = document.createElement('div');
content_div.id = 'content';
app_div.appendChild(content_div);


template('home', function(){
    home(content_div);
});

template('products', function(){
    products(content_div);
});

template('cart', function(){
    cart(content_div);
});

template('register', function(){
    register(content_div);
});

template('login', function(){
    login(content_div);
});

route('/', 'home');
route('/products', 'products');
route('/register', 'register');
route('/login', 'login');
route('/cart', 'cart');