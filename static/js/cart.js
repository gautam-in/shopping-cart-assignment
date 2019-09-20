/**
 * Create immediately invoked function expression (IIFE)
 */
var cart = (function() {
  let emitter = window.mitt();
  var CONSTANS ={
    CART_QUANTITY : 'cart-item-quantity',
    TOTAL : 'totalPrice'
  }

   // Subscriber for cart element binding
  emitter.on('cart', e =>{
    cart.showCart();
  });
  // Subscriber for cart item calculation
    emitter.on('cart', e => {
    cart.itemsCalculation();
  });
  return {
    /**
     * Set Product in the session
     * @param  {Object} data The selected cart Items data. 
     */
    setSession: data => {
      var cartItems = [];
      if (localStorage.getItem("cart") !== "undefined" && localStorage.getItem("cart") !== null && JSON.parse(localStorage.getItem("cart")).length > 0 ) {
        cartItems = JSON.parse(localStorage.getItem("cart"));
      }
      cart.cartUpdate(cartItems, data);
      //cart.showCart();
      //cart.itemsCalculation();
    },

    /**
     * Update Cart items in the localstorage
     * @param  {Object} cartItems Previous cart items
     * @param  {Object} data Current selected Item
     * @param  {string} type=null Cart item increment(+) or decrement(-)
     */
    cartUpdate: (cartItems, data, type = null) => {
      let idx = cartItems.findIndex(item => {
        return item.id == data.id;
      });
      if (idx > -1) {
        if(type === "dec"){cartItems[idx].count--}else{cartItems[idx].count++;} 
      } else {
        cartItems.push({
          data: data,
          count: 1,
          id: data.id,
          price: data.price
        });
      }
      //Remove items from localstorage if count is 0
      if(idx > -1 && cartItems[idx].count === 0){
        cartItems.splice(idx, 1);
        document.getElementById(CONSTANS.CART_QUANTITY).textContent = 0;
      }
      localStorage.setItem("cart", JSON.stringify(cartItems));
      // publisher for cart
      emitter.emit('cart', null);
    },
    
    /**
     * Calculate total quantity of cart items
     */
    itemsCalculation: () => {
      var count = 0;
      var totalPrice = 0;
      if (localStorage.getItem("cart") !== "undefined" && localStorage.getItem("cart") !== null && JSON.parse(localStorage.getItem("cart")).length > 0 ) {
        JSON.parse(localStorage.getItem("cart")).forEach(element => {
          count += element.count;
          totalPrice += element.price * element.count;
        });
        document.getElementById(CONSTANS.CART_QUANTITY).textContent = count;
        document.getElementById(CONSTANS.TOTAL).textContent = totalPrice;
      }
    },
    
    /**
     * Increment or decrement cart Items
     * @param  {Object} obj Object of current action element
     * @param  {String} type Cart item increment(+) or decrement(-) value
     */
    cartQuantityIncOrDec: (obj, type) => {
      var data = { id: obj.getAttribute("id") };
      cart.cartUpdate(JSON.parse(localStorage.getItem("cart")), data, type);
      //cart.showCart();
      //cart.itemsCalculation();
    },

    /**
     * Bind cart items with HTML element
     */
    showCart: () => {
      let content = "";
      let buttonBlock = "";
      if (localStorage.getItem("cart") !== "undefined" &&
        localStorage.getItem("cart") !== null && 
        JSON.parse(localStorage.getItem("cart")).length > 0 ) {
        content += `<section>`;
        JSON.parse(localStorage.getItem("cart")).forEach(element => {
          content += `<div class="items__cart clearfix">
                      <img class="items__cart--img" src=${element.data.imageURL} alt="cart">
                      <div class="cart-action">
                        <h3 class="cart-action__name">${element.data.name}</h3>
                        <div class="cart-action__qty">
                          <button 
                            id = ${element.data.id} 
                            type="button" 
                            class="btn-primary cart-action__update minus" 
                            onclick="cart.cartQuantityIncOrDec(this, 'dec')">-
                          </button>
                          <span class="cart-action__quantity">${element.count}</span>
                          <button 
                            id = ${element.data.id} 
                            type="button" 
                            class="btn-primary cart-action__update plus" 
                            onclick="cart.cartQuantityIncOrDec(this, 'inc')">+
                          </button>
                        </div>
                        <div class="cart-action__amount">
                          <span class="cart-action__operator">&times;</span>Rs.<span class="per-quantity-amt">${element.data.price}
                          </span></span>
                        </div>
                      </div>
                      <div class="cart-action__total">Rs.<span class="total-amt">${element.data.price * element.count}</span></div>
                    </div>`;
        });
        content += `<div class="cart-button__cheaper clearfix">
                      <img class="cart-button__cheaper--img" src="static/images/lowest-price.png" alt="cheaper">
                      <h5 class="cart-button__cheaper--title">You won't find it cheaper anywhere</h5>
                    </div>
                    </section>`;
        buttonBlock =`<div class='promo-code'>Promo code can be applied on payment page</div>
                      <button class="btn btn-primary btn-block shopping-btn goto-checkout clearfix">
                      <span class="title">Proceed to Checkout</span>
                      <span class="price">Rs. <span id='totalPrice'>0</span> &rarr;</span>
                      </button>`;
      } else {
        content = `<div class="items__no-items">
                    <h2>No items in your cart</h2>
                    <p>Your favourite items are just a click away</p>
                    </div> `;
        buttonBlock = `<button class="btn btn-primary btn-block shopping-btn">
                    Start shopping</button>`;
      }
      document.getElementsByClassName("items")[0].innerHTML = content;
      document.getElementsByClassName("cart-button")[0].innerHTML = buttonBlock;
    }
  };
})();
cart.showCart();
cart.itemsCalculation();
