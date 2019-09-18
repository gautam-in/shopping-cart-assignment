/**
 * Create immediately invoked function expression (IIFE)
 * Common function for all module
 */

const common = (function() {
  //JS for Responsive Product category
  // if (window.innerWidth < 768) {
  //   var categoryMenuItems = document.querySelectorAll(
  //     ".category-items .menu-items"
  //   );
  //   categoryMenuItems.forEach(function(item) {
  //     item.onclick = function(e) {
  //       document.querySelector(".sidebar__action--mobile").textContent =
  //         e.target.textContent;
  //       document.querySelector(CONSTANS.CATEGORY_ITEMS).classList.remove("hide");
  //     };
  //   });
  // }

  /**
     * Bind the listener to hiding shopping cart
     */
  document.querySelector(".shopping-btn").addEventListener("click", function() {
    document.getElementById(CONSTANS.CART_ID).classList.remove("show");
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
        var posLeft = document.querySelectorAll(CONSTANS.MINI_CART)[0].offsetLeft + 
        document.querySelectorAll(CONSTANS.MINI_CART)[0].offsetWidth;
        document.getElementById(CONSTANS.CART_ID).style.right = window.innerWidth - (posLeft + 15) + "px";
      }
      document.getElementById(CONSTANS.CART_ID).classList.add("show");
    },

    /**
     * Method to close shopping cart after clicking shopping button
     * @param (Object) e Object of current context
     */
    closeShoppingCart: e => {
      e.stopPropagation();
      document.getElementById(CONSTANS.CART_ID).classList.remove("show");
    }
  };
})();
