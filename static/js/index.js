let initWebsite = function () {
  this.maincontainer = dom.getElById("Main");
  this.contentcontainer = dom.getElById("MainContent");
  this.navigationItems = Array.from(
    dom.getElsByClass("-nav-item", this.maincontainer)
  );
  this.signInButton = dom.getElsByClass(
    "-sign-in-button",
    this.maincontainer
  )[0];
  this.signUpButton = dom.getElsByClass(
    "-sign-up-button",
    this.maincontainer
  )[0];
  this.init();
};
initWebsite.prototype = {
  init: function () {
    this.initNavigationMenu();
  },
  initNavigationMenu: function () {
    this.navigationItems.forEach(
      function (navItem) {
        navItem.addEventListener("click", this.activateTheNav.bind(this));
      }.bind(this)
    );
    this.navigationItems[0].click();
  },
  activateTheNav: function (event) {
    let _name = event.target.getAttribute("data-name");
    if (this["init_" + _name]) {
      this["init_" + _name]();
    } else {
      this.notFound();
    }
  },
  notFound: function () {},
  init_Home: function () {
    var url = "http://localhost:5000/banners";
    ajax.get(url).then(function (xhr) {
      var data = JSON.parse(xhr.responseText);
    });
  },
  init_Products: function () {
    var url = "http://localhost:5000/products";
    ajax.get(url).then(function (xhr) {
      var data = JSON.parse(xhr.responseText);
    });
  },
};
