
function Header(){
    var nav = document.querySelector('.navbar');

// ----nav logo---
var nav_logo = document.createElement('div');
    nav_logo.className = "nav-logo";
var image = document.createElement('img');
    image.className = "nav-logo-image";
    image.setAttribute('src','../static/images/logo.png');
    image.setAttribute('alt',"Sabka Bazaar Logo");
    image.setAttribute('height','60');
    image.setAttribute('width','133');
var nav_as = document.createElement('div');
    nav_as.className = "nav-as";
var ul_nav = document.createElement('ul');
    ul_nav.className = "as";
var li_nav1 = document.createElement('li');
var a_nav = document.createElement('a');
    a_nav.setAttribute('href',"index.html");
    a_nav.setAttribute('alt',"index page");
    a_nav.innerText = "Home";

var li_nav2 = document.createElement('li');
var a_nav2 = document.createElement('a');
    a_nav2.setAttribute('href',"products.html");
    a_nav2.setAttribute('alt',"products page");
    a_nav2.innerText = "Products";


    nav_logo.append(image);
    nav_logo.append(nav_as);
    nav_as.append(ul_nav);
    ul_nav.append(li_nav1);
    li_nav1.append(a_nav);
    ul_nav.append(li_nav2);
    li_nav2.append(a_nav2);

// -------nav cart-----
var nav_cart = document.createElement('div');
    nav_cart.className = "nav-cart";
var ul_cart = document.createElement('ul');
    ul_cart.className ="sign-as";  
var li_cart1 = document.createElement('li');
var a_cart1 = document.createElement('a');
    a_cart1.setAttribute('href','signin.html');
    a_cart1.innerText = "SignIn";

var li_cart2 = document.createElement('li');
var a_cart2 = document.createElement('a');
    a_cart2.setAttribute('href','register.html');
    a_cart2.innerText = "Register";

var li_cart3 = document.createElement('li');
    li_cart3.style.display = 'none';
var a_cart3 = document.createElement('a');
    a_cart3.setAttribute('href','logout.html');
    a_cart3.innerText = "Logout";

    nav_cart.append(ul_cart);
    ul_cart.append(li_cart1);
    li_cart1.append(a_cart1);
    ul_cart.append(li_cart2);
    li_cart2.append(a_cart2);
    ul_cart.append(li_cart3);
    li_cart3.append(a_cart3);

// ---------nav cart logo-------
var nav_cart_logo = document.createElement('div');
    nav_cart_logo.className = "nav-cart-logo";

var nav_cart_logo_a = document.createElement('a');
    nav_cart_logo_a.setAttribute('href','cartcard.html');

var nav_cart_logo_span = document.createElement('span');
    nav_cart_logo_span.className = "icon-cart count-color";

var nav_cart_logo_span1 = document.createElement('span');
    nav_cart_logo_span1.className = "cart-item-count";
    nav_cart_logo_span1.innerText = "0 Item";


    nav_cart_logo.append(nav_cart_logo_a);
    nav_cart_logo_a.append(nav_cart_logo_span);
    nav_cart_logo_a.append(nav_cart_logo_span1);

    nav.append(nav_logo);
    nav.append(nav_cart);
    nav_cart.append(nav_cart_logo);
}

window.addEventListener('DOMContentLoaded',Header);