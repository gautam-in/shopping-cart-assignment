import LoadModal, { OpenModal } from '../Modal/Modal';
import './Navigation.scss';

class SBNavigation extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    let header = document.createElement('header');
    header.setAttribute('class', 'sb-header');

    let nav = document.createElement('nav');
    nav.setAttribute('class', 'container d-flex');

    let leftSideNavigation = document.createElement('section');
    leftSideNavigation.setAttribute('class', 'd-flex left-section');

    let logo = document.createElement('img');
    logo.setAttribute('class', 'logo');
    logo.setAttribute('src', '/static/images/logo_2x.png');
    logo.setAttribute('alt', 'logo');

    leftSideNavigation.append(logo);

    leftSideNavigation.append(
      this.navItems('Home', '/'),
      this.navItems('Products', '/products.html')
    );

    let rightSideNavigation = document.createElement('section');
    rightSideNavigation.setAttribute('class', 'd-flex fdir-col right-section');

    let rightSideNavigationTop = document.createElement('div');
    rightSideNavigationTop.append(
      this.navItems('SignIn', '/signin.html'),
      this.navItems('Register', '/register.html')
    );

    let rightSideNavigationCart = document.createElement('div');
    rightSideNavigationCart.setAttribute('class', 'cart d-flex');

    rightSideNavigationCart.addEventListener('click', (event) => {
      OpenModal(event);
    });

    let cartIcon = document.createElement('div');
    cartIcon.setAttribute('class', 'cart-icon');

    let cartDetails = document.createElement('span');
    cartDetails.setAttribute('id', 'items_in_cart');

    const cartItems = JSON.parse(window.localStorage.getItem('cart'));
    cartDetails.innerHTML = cartItems ? `${cartItems.length} items` : '0 items';

    rightSideNavigationCart.append(cartIcon, cartDetails);

    rightSideNavigation.append(rightSideNavigationTop, rightSideNavigationCart);

    nav.append(leftSideNavigation, rightSideNavigation);

    header.append(nav);

    this.appendChild(header);

    LoadModal();
  }

  navItems(text, path) {
    const item = document.createElement('a');
    item.setAttribute('class', 'nav-item');
    item.setAttribute('href', path);
    item.innerHTML = text;
    return item;
  }
}

customElements.define('sb-nav', SBNavigation);
