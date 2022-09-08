import { network } from "../../service/service";

class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    async connectedCallback() {
      this.innerHTML = `
      <header id="top-header">
      <nav class="navbar">
          <div class="navbar-container">
              <div class="navbar-container-section block1"><img
                  alt="SABKAA BAZAAR"
                  loading="eager"
                  src="static/images/logo.png"
                  srcset="../../static/images/logo_2x.png 2x"
                /></div>
              <div class="block2"> 
              <ul class="navbar-list-items-end navbar-list-items-end--dark">
                  <li><a id="login-link"></a></li>
                  <li id="register-link"><a href="register.html">Register</a></li>
              </ul>
              </div>  
             
              <div class="block3">
                  <ul class="navbar-list-items-middle navbar-list-items-middle--light">
                      <li><a href="index.html">Home</a></li>
                      <li><a href="products.html">Products</a></li>
                  </ul>
              </div>
              
              <div id="cart-icon" class="navbar-container-cart block4">
                  <ul class="navbar-list-items-end navbar-list-items-end--dark">
                      <li>
                          <button class="navbar-cart-button" id="cart-button">
                              <img src="../../static/images/cart.svg" height=20 alt="cart icon"/>
                          </button>
                          <strong id="total-items">0 Items</strong> 
                      </li>
                  </ul>
              </div>
            </div>
            <div></div>
          </section>
        </nav>
    </header>
    `;

    //handle items in headers based on conditions
    const token = sessionStorage.getItem('isLoggedIn');
    const cartBtn = document.getElementById('cart-icon');
    const loginEl = document.getElementById('login-link');
    const currentPath = window.location.pathname;
    cartBtn.style.display = 'none';
    if(token){
        if(!currentPath.includes('login')){
            loginEl.textContent = 'Logout';
            cartBtn.style.display = 'block';
        }
    }else{
        if(!currentPath.includes('login')){
            loginEl.textContent = 'SignIn';
            cartBtn.style.display = 'block';
        }
    }
    loginEl.onclick = ()=>navigate(token);

    //clear session and navigate to login page
    const navigate = async(token)=>{
        if(token){
            await network('/logout',{method:'GET'});
        }
        sessionStorage.removeItem('isLoggedIn');
        sessionStorage.removeItem('userId');
        window.location.href = 'login.html';
    };
    }
}
customElements.define('header-component', Header);