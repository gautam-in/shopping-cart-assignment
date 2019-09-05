export const elements = {
  loader: document.querySelector('#loader'),
  cart: document.querySelector('#cart'),
  cartItemCount: document.querySelector('#cart-item-count'),
  landingPage: {
    mainContent: document.querySelector('#main-content'),
    carouselContent: document.querySelector('#carousel-content')
  },
  validators: {
    emailPattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    blankPattern: '',
    passwordCriteriaPattern: /(?=.{6,})((?=.*\d)(?=.*[a-z])(?=.*[A-Z])|(?=.*\d)(?=.*[a-zA-Z])(?=.*[\W_])|(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_])).*/,
    spacePattern: /\s/
  },
  registerdEvents: {
    productsPage: {
      handleButtonsEventStatus: false,
      filterCategoriesEventStatus: false
    },
    CartPage: {
      closeButtonIconEventStatus: false,
      addItemEventStatus: false,
      removeItemEventStatus: false
    }
  }
}
