let products = function (ctrl) {
  this.controller = ctrl;
  this.init();
};
products.prototype = {
  init: function () {
    const url = "http://localhost:5000/products";
    ajax.get(url).then(function (xhr) {
      var data = JSON.parse(xhr.responseText);
    });
  },
};
