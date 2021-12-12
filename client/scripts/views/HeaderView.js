export default class HeaderView {
  constructor() {}

  showOrHideCart() {
    document.querySelector(".cart-popup").classList.toggle("d-none");
    const isHide = document
      .querySelector(".cart-popup")
      .classList.contains("d-none");
    if (!isHide) {
      document.querySelector("#overlayLayer").classList.add("black-overlay");
    } else {
      document.querySelector("#overlayLayer").classList.remove("black-overlay");
    }
  }
}
