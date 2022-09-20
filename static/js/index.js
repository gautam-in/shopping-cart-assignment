let initWebsite = function () {
  this.maincontainer = dom.getElById("Main");
  this.contentcontainer = dom.getElById("MainContent");
  this.cart = dom.getElsByClass("-cart", document.body)[0];
  this.cartoverly = dom.getElsByClass("-cart-overlay", document.body)[0];
  this.cartItems = localStorage.getItem("CartItems")
    ? JSON.parse(localStorage.getItem("CartItems"))
    : [];
  this.navigationItems = Array.from(
    dom.getElsByClass("-nav-item", this.maincontainer)
  );
  this.cartbutton = dom.getElsByClass("-cart-button", this.maincontainer)[0];
  // this.signInButton = dom.getElsByClass(
  //   "-sign-in-button",
  //   this.maincontainer
  // )[0];
  // this.signUpButton = dom.getElsByClass(
  //   "-sign-up-button",
  //   this.maincontainer
  // )[0];
  this.init();
};
initWebsite.prototype = {
  init: function () {
    this.initNavigationMenu();
    this.handleCartCount();
  },
  handleCartCount: function () {
    let _item_count_div = dom.getElsByClass("-item-count", this.cartbutton)[0];
    let _cart_items = localStorage.getItem("CartItems")
      ? JSON.parse(localStorage.getItem("CartItems"))
      : [];
    let _total_cart_items = 0;
    _cart_items.forEach((elem) => {
      _total_cart_items = _total_cart_items + elem.quantity;
    });
    _item_count_div.innerHTML = _total_cart_items + " Items";
    this.cartItems = _cart_items;
  },
  initNavigationMenu: function () {
    let _hash = window.location.hash;
    _hash = _hash.split("#");
    _hash = _hash.length > 1 ? _hash[1] : "Home";
    this.navigationItems.forEach(
      function (navItem) {
        navItem.addEventListener("click", this.activateTheNav.bind(this));
      }.bind(this)
    );
    const _active_nav = this.navigationItems.filter((el) => {
      return el &&
        el.getAttribute("data-name") &&
        el.getAttribute("data-name") == _hash
        ? el
        : null;
    });
    if (_active_nav && _active_nav[0]) _active_nav[0].click();

    if (this.cartbutton) {
      this.cartbutton.addEventListener("click", this.init_Cart.bind(this));
    }
  },
  activateTheNav: function (event) {
    let _target = event.target,
      _name;

    if (!_target.classList.contains("-nav-item")) {
      _target = dom.findElInTree(_target, this.maincontainer, ".-nav-item");
    }
    _name = _target.getAttribute("data-name");
    if (_name == "Cart") return this.init_Cart();
    this.contentcontainer.innerHTML = "";
    this.navigationItems.forEach((elem) => {
      elem.classList.remove("-active");
    });
    _target.classList.add("-active");
    this.contentcontainer.setAttribute("data-page", _name);
    if (this["init_" + _name]) {
      this["init_" + _name]();
    } else {
      this.notFound();
    }
  },
  notFound: function () {},
  init_Home: function () {
    const _script_url = "./static/js/home.js";
    ajax.loadScript(_script_url).then(
      function () {
        const _home = new home(this);
      }.bind(this)
    );
  },
  init_Products: function () {
    const _script_url = "./static/js/products.js";
    ajax.loadScript(_script_url).then(
      function () {
        const _products = new products(this);
      }.bind(this)
    );
  },
  init_SignIn: function () {
    const _script_url = "./static/js/signin.js";
    ajax.loadScript(_script_url).then(
      function () {
        const _signIn = new signIn(this);
      }.bind(this)
    );
  },
  init_SignUp: function () {
    const _script_url = "./static/js/signup.js";
    ajax.loadScript(_script_url).then(
      function () {
        const _signUp = new signUp(this);
      }.bind(this)
    );
  },
  init_Cart: function () {
    const _script_url = "./static/js/cart.js";
    ajax.loadScript(_script_url).then(
      function () {
        const _cart = new cart(this);
      }.bind(this)
    );
  },
};
