import CartModal from "../cartModal/cartModal";
import Logo from "../../../static/images/logo.png";
import "./header.scss";

const Header = {
  render: async () => {
    return `
    <header class="header-container">
          <div class="header-container__content">
            <div class="header-container__logo">
              <img src="${Logo}" />
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
                <div  class="header-container__items--cart">
                  <div id="cart-btn" tabindex='0' class="header-container__items--cart-count">0 items</div>
                  ${CartModal.render()}
                </div>
              </div>
            </div>
          </div>
      </header>
    `;
  },
  reRender: async () => {
    let cartBtn = document.getElementById("cart-btn");
    let cartModal = document.getElementById("cart__modal");
    let modalClose = document.getElementById("modal__close");

    const modalToggle = () => {
      if (cartModal.style.display === "block") {
        cartModal.style.display = "none";
      } else {
        cartModal.style.display = "block";
      }
    };
    modalClose.addEventListener("click", modalToggle);
    cartBtn.addEventListener("click", modalToggle);
  },
};
export default Header;
