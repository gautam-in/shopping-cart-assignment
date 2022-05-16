import "./cartModal.scss";
import Button from "../button/button";
import im from "../../../static/images/products/baby/mamy.jpg";
import lowPrice from "../../../static/images/lowest-price.png";
import { iconAdd, iconRemove, iconClear } from "../../icons/icons";

class CartModal {
  constructor() {}

  openCartModal = () => {
    const cartModal = document.getElementById("cart__modal");
    console.log(cartModal);
  };

  renderIncrementBtn = () => {
    return `
      <div class='item-action'>
      <div>${iconRemove()}</div>
      <div class='item-qty'>1</div>
      <div>${iconAdd()}</div>
      </div>
    `;
  };

  renderPrice = () => {
    return `<div>Rs.187</div>`;
  };

  renderItem = () => {
    return `<div class='item-container'>
            <div class='item-image'>
              <img src=${im} width='100%' />
            </div>
            <div class='item-content'>
              <div class='item-name'>Apple - Washington, Regular, 4 pcs</div>
              <div class='item-footer'>
                ${this.renderIncrementBtn()} 
                <div class='item-footer item-price-row'>
                <span>${iconClear({ size: "18" })}</span> 
                ${this.renderPrice()}
                </div>
              </div>
            </div>
            <div class='item-total-price'>RS.187</div>
          </div>`;
  };

  renderGuranteed = () => {
    return `
    <div class='item-discount'>
      <div class='item-discount-img'><img src=${lowPrice} width='100%' alt='lowest price guaranteed' /></div>
      <div>You won't find it cheaper anywhere</div>
    </div>`;
  };

  renderHeader = () => {
    return `
    <div class="modal-header">
      <h1>My Cart (1 item)</h1>
      <span id='modal__close' class='modal-close'>
        ${iconClear({ size: "24" })}
      </span>
    </div>`;
  };

  render = () => {
    return `
     <div id='cart__modal' class="cart-modal">
            <div class="modal-dialog">
              <div class="modal-content">
                ${this.renderHeader()}
                <div class="modal-body">
                ${this.renderItem()}
                ${this.renderItem()}
                ${this.renderItem()}
                ${this.renderGuranteed()}
                </div>
                <div class="modal-footer">
                  <div><p>Promo code can be applied on payment page</p></div>
                  ${Button.render({
                    type: "button",
                    label: `<div class='btn-container'>
                        <div>Proceed to Checkout</div>
                        <div>RS.187</div>
                      </div>`,
                    className: "procced-btn",
                  })}
                </div>  
              </div>
            </div>
          </div>
    `;
  };
}

export default new CartModal();
