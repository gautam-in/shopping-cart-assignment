import cartModal from "../cartModal/cartModal";
import Logo from "../../../static/images/logo.png";
import "./header.scss";
import { iconCart } from "../../icons/icons";

const Header = {
  render: async () => {
    const cartTotal =
      cartModal.cartTotalItems > 99 ? "99+" : cartModal.cartTotalItems;

    return `
    <header class="header-container">
          <div class="header-container__content">
            <div class="header-container__logo">
              <img src="${Logo}" alt='sabka bazar logo' />
            </div>
            <div class="header-container__items">
              <div class="header-container__links">
                <h6><a href="/">SignIn</a></h6>
                <h6><a href="#/register">Resgister</a></h6>
              </div>
              <div class="header-container__items--menu">
                <ul class="header-container__items--links">
                  <li>
                    <a href="#/home"> Home</a>
                  </li>
                  <li><a href="#/productlist">Products</a></li>
                </ul>
                <div class="header-container__items--cart">
                <div class='header-container__items--cart-icon' id='cart-icon' role='button' aria-label='view cart details'>${iconCart()}</div>
                <div id="cart-btn">
                    <div tabindex='0' class="header-container__items--cart-count">${cartTotal} items</div>
                  </div>
                  ${await cartModal.render()}
                </div>
              </div>
            </div>
          </div>
      </header>
    `;
  },
  reRender: async () => {
    await cartModal.reRender();
    let cartBtn = document.getElementById("cart-btn");
    let cartIcon = document.getElementById("cart-icon");
    let cModal = document.getElementById("cart__modal");
    let modalClose = document.getElementById("modal__close");

    const modalToggle = async () => {
      if (cModal.style.display === "block") {
        cModal.style.display = "none";
      } else {
        cModal.style.display = "block";
        await cartModal.reRender();
      }
    };

    modalClose.addEventListener("click", modalToggle);
    cartBtn.addEventListener("click", modalToggle);
    cartIcon.addEventListener("click", modalToggle);
  },
};
export default Header;
