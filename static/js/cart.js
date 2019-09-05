/**
 * Create immediately invoked function expression (IIFE)
 */
var cart = (function() {
  return {
    //Set Product in the session
    setSession: data => {
      var cartItems = [];
      if (
        localStorage.getItem("cart") !== "undefined" &&
        localStorage.getItem("cart") !== null
      ) {
        cartItems = JSON.parse(localStorage.getItem("cart"));
      }
      cart.cartUpdate(cartItems, data);
      cart.showCart();
      cart.itemsCalculation();
    },
    //Cart Update
    cartUpdate: (cartItems, data, type = null) => {
      let idx = cartItems.findIndex(item => {
        return item.id == data.id;
      });

      if (idx > -1) {
        if(type === "dec"){
            cartItems[idx].count--
        }else{
            cartItems[idx].count++;
        } 
      } else {
        cartItems.push({
          data: data,
          count: 1,
          id: data.id
        });
      }
      //Remove items from localstorage if count is 0
      if(idx > -1 && cartItems[idx].count === 0) cartItems.splice(idx, 1);
      localStorage.setItem("cart", JSON.stringify(cartItems));
    },
    //Calculate quantity of cart
    itemsCalculation: () => {
      var count = 0;
      if (
        localStorage.getItem("cart") !== "undefined" &&
        localStorage.getItem("cart") !== null
      ) {
        JSON.parse(localStorage.getItem("cart")).forEach(element => {
          count += element.count;
        });
      }
      document.getElementById("cart-item-quantity").textContent = count; //(count === 0 ? count :type === null ? count: type === 'inc' ? ++count : --count);
    },
    //Increment or decrement cart Items
    cartQuantityIncOrDec: (e, type) => {
      var data = { id: e.getAttribute("id") };
      cart.cartUpdate(JSON.parse(localStorage.getItem("cart")), data, type);
      cart.showCart();
      cart.itemsCalculation();
    },
    //Show Cart Items
    showCart: () => {
      let content = "";
      let buttonBlock = "";
      if (
        localStorage.getItem("cart") !== "undefined" &&
        localStorage.getItem("cart") !== null && JSON.parse(localStorage.getItem("cart")).length > 0
      ) {
        content += `<section class="add-to-cart" id="add-to-cart">`;
        JSON.parse(localStorage.getItem("cart")).forEach(element => {
          content += `<div class="cart-items clearfix">
                        <div class="img">
                            <img src=${
                                element.data.imageURL
                            } alt="cart">
                        </div>
                        <div class="cart-action">
                            <h3 class="name">${element.data.name}</h3>
                            <div class="qty-addr">
                                <button id = ${
                                    element.data.id
                                } type="button" class="btn-primary btn-update minus" onclick="cart.cartQuantityIncOrDec(this, 'dec')">-</button>
                                <span class="qty">${
                                    element.count
                                }</span>
                                <button id = ${
                                    element.data.id
                                } type="button" class="btn-primary btn-update plus" onclick="cart.cartQuantityIncOrDec(this, 'inc')">+</button>
                            </div>
                            <div class="amount"><span class="operator">&times;</span>Rs.<span class="per-quantity-amt">${
                                element.data.price
                            }</span></span></div>
                        </div>
                        <div class="total">Rs.<span class="total-amt">${element
                            .data.price * element.count}</span></div>
                    </div>`;
        });
        content += `<div class="cheaper clearfix">
                    <img src="static/images/lowest-price.png" alt="cheaper">
                    <h5 class="title">You won't find it cheaper anywhere</h5>
                    </div>
                    </section>`;
        buttonBlock = `
        <div>fdfdffdefdfdf</div>
        <button class="btn btn-primary btn-block shopping-btn goto-checkout clearfix" id="start-shopping">
        <span class="title">Proceed to Checkout</span>
        <span class="price">Rs. 187 &rarr;</span>
        </button>`;
      } else {
        content = `<div class="no-items" id="no-items">
                    <h2>No items in your cart</h2>
                    <p>Your favourite items are just a click away</p>
                    </div> `;
        buttonBlock = `<button class="btn btn-primary btn-block shopping-btn" id="start-shopping">Start shopping</button>`;
      }
      document.getElementsByClassName(
        "shopping-cart-items"
      )[0].innerHTML = content;
      
      document.getElementsByClassName(
        "shopping-cart-button"
      )[0].innerHTML = buttonBlock;
    }
  };
})();
cart.showCart();
cart.itemsCalculation();
