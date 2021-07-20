const handlebars = require("handlebars");

const cartTemplate = {
  registerHelpers() {
    handlebars.registerHelper("totalQuantity", function (items) {
      const totalCost = items.reduce((acc, curr) => {
        return acc + curr.quantity;
      }, 0);
      return totalCost;
    });
    handlebars.registerHelper("cost", function (quantity, price) {
      return quantity * price;
    });
    handlebars.registerHelper("totalCost", function (items) {
      const totalCost = items.reduce((acc, curr) => {
        return acc + curr.quantity * curr.price;
      }, 0);
      return totalCost;
    });

    handlebars.registerHelper("emptyCart", function (items, options) {
      if (items.some((item) => item.quantity > 0)) {
        return options.inverse(this);
      } else {
        return options.fn(this);
      }
    });
  },
  generateMarkup(state) {
    this.registerHelpers();
    const template = handlebars.compile(
      `<div class="cart" class="hide">
          <div class="cart__header">
              <h3 class="heading-3 cart__header--title" aria-label="My cart">My Cart </h3>
              {{#emptyCart items}}
              {{else}}
              <span class="cart__header--quantity description-1" >(<span class="quantity-value" >{{totalQuantity items}} </span> item)</span> 
              {{/emptyCart}}
              <button aria-label="close cart" class="cart__header--close close-icon">X</button>
          </div>
        {{#emptyCart items}}
          <div class="cart__empty">
                 <h2 class="heading-2 cart__empty--title">No items in your cart </h2>
                  <div class="cart__empty--message description-1">Your favourite items are just a click away</div>
                  <button aria-label="Start Shopping" class="cart__empty--button button-1">Start Shopping</button>
          </div>
        {{else}}
            <div class="cart__item-list">
                  {{#each items}}
                      <div class="cart__item">
                          <div class="cart__item--img"><img src="{{this.imageURL}}"/></div>
                          <h4 class="cart__item--title heading-4">{{this.name}}</h4>
                          <div class="cart__item--minus" ><button tab-index='0' aria-label="increase quantity" class="action-icon-round  decrease-count " data-product-id="{{this.id}}"> - </button></div>
                          <div class="cart__item--count" > {{this.quantity}} </div>
                          <div class="cart__item--plus" ><button tab-index='0' aria-label="decrease quantity" class="action-icon-round increase-count" data-product-id="{{this.id}}" >  + </button></div>
                          <div class="cart__item--muliply"><span> X </span></div>
                          <div class="cart__item--rate">Rs.{{this.price}} </div>
                          <div class="cart__item--cost">Rs.{{cost this.price this.quantity}}</div>
                      </div>
                  {{/each}}
              </div>
              <div class="cart__banner">
                  <div class="cart__banner--img ">
                    <img src="/static/images/lowest-price.png"/>
                  </div>
                  <div class="cart__banner--text">You wont find it Cheaper any where</div>
              </div>
       
              <div class="cart__checkout">
                  <div class="cart__checkout--text description-1">Promo code can be applied on payment page</div>
                  <button class="cart__checkout--button button-1"><span>Proceed to checkout</span> <span>Rs.<span class="cart__checkout--cost">{{totalCost items}}</span></span></button>
              </div>
         {{/emptyCart }}
      </div>`
    );
    //Filter and display only those items with quantity is greater than zero
    return template({
      items: Object.values(state.cart).filter((item) => item.quantity > 0),
    });
  },
};

module.exports = cartTemplate;
