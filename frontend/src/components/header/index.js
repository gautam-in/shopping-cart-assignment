import cartModal from "../cartModal/cartModal";
import Logo from "../../../static/images/logo.png";
import "./header.scss";

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
                  <div id="cart-btn" tabindex='0' class="header-container__items--cart-count">${cartTotal} items</div>
                  <div id='cart-modal'></div>
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
  },
};
export default Header;
