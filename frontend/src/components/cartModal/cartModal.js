import "./cartModal.scss";
import Button from "../button/button";
import lowPrice from "../../../static/images/lowest-price.png";
import { iconAdd, iconRemove, iconClear } from "../../icons/icons";
import { formatPrice } from "../../../helpers";
import Header from "../header";
import { renderHeader } from "../../public";

class CartModal {
  constructor() {
    this.cartItemsLits = {};
    this.cartTotalItems = 0;
  }

  openCartModal = () => {
    const cartModal = document.getElementById("cart__modal");
    console.log(cartModal);
  };

  addItemInCart = (item) => {
    console.log("s", item);
    if (item.id && this.cartItemsLits[item.id]) {
      let cartItem = this.cartItemsLits[item.id];
      cartItem.qty++;
      cartItem.totalPrice = +cartItem.price * +cartItem.qty;
    } else {
      this.cartItemsLits[item.id] = { ...item, totalPrice: item.price, qty: 1 };
    }
    this.cartTotalItems = Object.keys(this.cartItemsLits).length;
  };

  removeItemInCart = (item) => {
    if (item.id && this.cartItemsLits[item.id]) {
      const cartItem = this.cartItemsLits[item.id];
      if (cartItem.qty === 1) {
        delete this.cartItemsLits[item.id];
      } else {
        cartItem.qty--;
        cartItem.totalPrice = +cartItem.price * +cartItem.qty;
      }
    }
    this.cartTotalItems = Object.keys(this.cartItemsLits).length;
  };

  renderFooter = () => {
    const tPrice = Object.values(this.cartItemsLits).reduce(
      (p, c) => (p += c.totalPrice),
      0.0
    );
    return `       
        <div class="modal-footer">
            <div><p>Promo code can be applied on payment page</p></div>
            ${Button.render({
              type: "button",
              label: `
            <div class="btn-container">
              <div>Proceed to Checkout</div>
              <div>${formatPrice(tPrice)}</div>
            </div>
            `,
              className: "procced-btn",
            })}
        </div>
`;
  };

  renderProduct = (product) => {
    const { price, name, id, imageURL, totalPrice, qty } = product;
    return `
          <div class="item-container">
            <div class="item-image">
              <img src="${imageURL}" width="100%" alt="${name}" />
            </div>
            <div class="item-content">
              <div class="item-name">${name}</div>
              <div class="item-footer">
                <div class="item-action">
                  <div>
                    <button id='remove_cart_btn' data-id='${id}'  class='item-remove-btn'  aria-label='${name} remove item in cart'>
                      ${iconRemove()}
                    </button>
                  </div>
                  <div class="item-qty">${qty}</div>
                  <div>
                    <button id='add_cart_btn' data-id='${id}'  class='item-add-btn' aria-label='${name} add item in cart'>
                      ${iconAdd()}
                    </button>
                  </div>
                </div>
                <div class="item-footer item-price-row">
                  <span>${iconClear({ size: "18" })}</span>
                  <div>${formatPrice(price)}</div>
                </div>
              </div>
            </div>
            <div class="item-total-price">${formatPrice(totalPrice)}</div>
          </div>
    `;
  };

  renderContent = () => {
    let cartItems = Object.values(this.cartItemsLits);
    let ele = [];
    cartItems.forEach((list) => ele.push(this.renderProduct(list)));
    return ele.join("");
  };

  renderModalContent = async () => {
    let headerCount = document.getElementById("cart-btn");
    headerCount.innerHTML = `${this.cartTotalItems} items`;

    return `<div class="modal-header">
                <h1>
                  My Cart (${
                    this.cartTotalItems > 99 ? "99+" : this.cartTotalItems
                  }
                  item)
                </h1>
                <span id="modal__close" class="modal-close">
                  ${iconClear({ size: "24" })}
                </span>
              </div>
              <div class="modal-body">
                ${this.renderContent()}
                <div class="item-discount">
                  <div class="item-discount-img">
                    <img src="${lowPrice}" width="100%" alt="lowest price guaranteed" />
                  </div>
                  <div>You won't find it cheaper anywhere</div>
                </div>
              </div>
              ${this.renderFooter()}`;
  };

  render = async () => {
    return `
        <div id="cart__modal" class="cart-modal">
          <div class="modal-dialog">
            <div id='cart__modal__content' class="modal-content">
            </div>
          </div>
        </div>
    `;
  };

  reRender = async () => {
    const self = this;
    const modalC = document.getElementById("cart__modal__content");
    modalC.innerHTML = await self.renderModalContent();

    const modalClose = document.getElementById("modal__close");
    const cModal = document.getElementById("cart__modal");

    const addCartBtnList = document.querySelectorAll("#add_cart_btn");
    const removeCartBtnList = document.querySelectorAll("#remove_cart_btn");

    if (modalClose) {
      const modalToggle = async () => {
        if (cModal.style.display === "block") {
          cModal.style.display = "none";
        }
      };
      modalClose.addEventListener("click", modalToggle);
    }

    if (addCartBtnList && addCartBtnList.length) {
      addCartBtnList.forEach((i) => {
        i.addEventListener("click", async function (e) {
          let btn = e.target;
          if (e.target.tagName === "svg") {
            btn = e.target.parentElement;
          }
          const selectedProductId = btn.getAttribute("data-id");
          if (selectedProductId && self.cartItemsLits[selectedProductId]) {
            self.addItemInCart(self.cartItemsLits[selectedProductId]);
            await self.reRender();
          }
        });
      });
    }

    if (removeCartBtnList && removeCartBtnList.length) {
      removeCartBtnList.forEach((i) => {
        i.addEventListener("click", async function (e) {
          let btn = e.target;
          if (e.target.tagName === "svg") {
            btn = e.target.parentElement;
          }
          const selectedProductId = btn.getAttribute("data-id");
          if (selectedProductId) {
            self.removeItemInCart(self.cartItemsLits[selectedProductId]);
            await self.reRender();
          }
        });
      });
    }
  };
}

export default new CartModal();
