/**
 * Create immediately invoked function expression (IIFE)
 * Common function for all module
 */

const common = (function() {
  //JS for Responsive Product category
  if (window.innerWidth < 768) {
    var categoryMenuItems = document.querySelectorAll(
      ".category-items .menu-items"
    );
    categoryMenuItems.forEach(function(item) {
      item.onclick = function(e) {
        document.querySelector(".show-category-for-responsive").textContent =
          e.target.textContent;
        document.querySelector(".category-items").style.display = "none";
      };
    });
  }

  /**
     * Bind the listener to hiding shopping cart
     */
  document.querySelector(".shopping-btn").addEventListener("click", function() {
    document.getElementById("shopping-cart").style.display = "none";
  });

  return {

    /**
     * Method to check login form field value is empty or not
     * @param  {String} field Id of HTML form element
     */
    validationForLabel: field => {
      if (document.getElementById(field).value !== "") {
        document.getElementById(field).classList.add("has-text");
      } else {
        document.getElementById(field).classList.remove("has-text");
      }
    },

    /**
     * Method to open shopping cart after clicking shopping button
     */
    openShoppingCart: () => {
      if (window.matchMedia("screen and (min-width: 1025px)").matches) {
        // Calculate the width to show cart
        var posLeft = document.querySelectorAll(".mini-cart")[0].offsetLeft + 
        document.querySelectorAll(".mini-cart")[0].offsetWidth;
        document.getElementById("shopping-cart").style.right = window.innerWidth - (posLeft + 15) + "px";
      }
      document.getElementById("shopping-cart").style.display = "block";
    },

    /**
     * Method to close shopping cart after clicking shopping button
     * @param (Object) e Object of current context
     */
    closeShoppingCart: e => {
      e.stopPropagation();
      document.getElementById("shopping-cart").style.display = "none";
    }
  };
})();
