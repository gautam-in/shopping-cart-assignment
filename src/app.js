require("babel-runtime/regenerator");
require("webpack-hot-middleware/client?reload=true");
require('./favicon.ico');

require("./scss/cart.scss");
require("./scss/products.scss");
require("./scss/login.scss");
require("./scss/carousel.scss");
require("./scss/query.scss");
require("./scss/home.scss");
require("./scss/common.scss");


const header = `<div class="row">
<nav>
  <a href="#" class="logo">
    <img src="./static/images/logo.png" alt="Sabka Bazaar" srcset="" class="logo">
  </a>
  <div>
    <input type="checkbox" id="hamberger" />

    <label class="nav_btn" for="hamberger">

      <div class="center">
        <div class="icon">
          <span class="bar1"></span>
          <span class="bar2"></span>
          <span class="bar3"></span>
        </div>
      </div>
    </label>
    <span class="cart_btn">
      <a href="cart.html" class="btn_to_cart">
        <i class="cart_icon">
          <svg version="1.1" width="30" id="Layer_1" focusable="false" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 24 24"
            style="enable-background:new 0 0 24 24;" xml:space="preserve">
            <path
              d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1.003 1.003 0 0 0 20 4H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
          </svg>
          <span>0 <span>items</span></span>
        </i>
        
      </a>
    </span>
    <div class="nav_link">
      <ul class="align_left">
        <li><a href="index.html">Home</a></li>
        <li><a href="products.html">Products</a></li>
      </ul>
      <ul class="align_right">
        <li><a href="login.html">SignIn</a></li>
        <li><a href="signup.html">Register</a></li>
      </ul>
    </div>
  </div>
</nav>
</div>`;




const footer = `<div class="row">
                <p>
                    Copyright &copy; 2011 &mdash; 2018 Sabka Bazaar Grocery Supplies Pvt Ltd
                </p>
                </div>`;


document.getElementById("header").innerHTML = header;
document.getElementById("footer").innerHTML = footer;
