
 const common = (()=> {
   //checkout button class remove
    document.querySelector(".shopping-btn").addEventListener("click", ()=> {
      document.getElementById(CONSTANTS.CART_ID).classList.remove("show");
    });
  
    return {
      openShoppingCart: () => {
        if (window.matchMedia("screen and (min-width: 1025px)").matches) {
          // Calculate the width to show cart
          let posLeft = document.querySelectorAll(CONSTANTS.MINI_CART)[0].offsetLeft + 
          document.querySelectorAll(CONSTANTS.MINI_CART)[0].offsetWidth;
          document.getElementById(CONSTANTS.CART_ID).style.right = window.innerWidth - (posLeft + 15) + "px";
        }
        document.getElementById(CONSTANTS.CART_ID).classList.add("show");
      },
  
      closeShoppingCart: e => {
        e.stopPropagation();
        document.getElementById(CONSTANTS.CART_ID).classList.remove("show");
      }
    };
  })();
  