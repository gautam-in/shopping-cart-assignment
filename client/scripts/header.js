export class Header extends HTMLElement {
  isRootDirectory = false;

  brandImagePath = './static/images/logo.png';
  constructor() {
    super();
  }

  connectedCallback() {
    this.isRootDirectory = this.hasAttribute('isRoot')
      ? this.getAttribute('isRoot') === 'true'
      : false;

    const header = document.createElement('header');
    header.classList.add('header');
    const container = document.createElement('div');
    container.classList.add('container');
    const row = document.createElement('div');
    row.classList.add('row');
    const brandCol = document.createElement('div');
    brandCol.classList.add('col');
    const brandImg = document.createElement('img');
    brandImg.classList.add('logo');
    brandImg.src = this.isRootDirectory
      ? this.brandImagePath
      : '.' + this.brandImagePath;

    brandCol.appendChild(brandImg);
    row.appendChild(brandCol);

    const navCol = document.createElement('div');
    navCol.classList.add('main-nav', 'col');
    const nav = document.createElement('nav');
    nav.classList.add('h-100');

    const navUl = document.createElement('ul');
    navUl.classList.add(
      'list-unstyled',
      'd-flex',
      'nav-items',
      'align-items-end',
      'h-100'
    );

    nav.appendChild(navUl);

    const navLinkHome = document.createElement('a');
    navLinkHome.setAttribute(
      'href',
      this.isRootDirectory ? './index.html' : '../index.html'
    );
    navLinkHome.classList.add('nav-link');
    navLinkHome.innerText = 'Home';

    const navLinkProducts = document.createElement('a');
    navLinkProducts.setAttribute(
      'href',
      this.isRootDirectory ? './pages/products.html' : './products.html'
    );
    navLinkProducts.classList.add('nav-link');
    navLinkProducts.innerHTML = 'Products';

    [navLinkHome, navLinkProducts].map(link => {
      const li = document.createElement('li');
      li.appendChild(link);
      navUl.appendChild(li);
    });
    navCol.appendChild(nav);
    row.appendChild(navCol);

    const cartCol = document.createElement('div');
    cartCol.classList.add(
      'col-4',
      'col-md-2',
      'd-flex',
      'flex-column',
      'justify-content-around',
      'align-items-end'
    );

    const loginRegisterDiv = document.createElement('div');
    loginRegisterDiv.classList.add('login-register');
    cartCol.appendChild(loginRegisterDiv);

    const loginLink = document.createElement('a');
    loginLink.classList.add('accounts');
    const registerLink = document.createElement('a');
    registerLink.classList.add('accounts');

    loginLink.setAttribute(
      'href',
      this.isRootDirectory ? './pages/signIn.html' : './signIn.html'
    );
    registerLink.setAttribute(
      'href',
      this.isRootDirectory ? './pages/register.html' : './register.html'
    );

    loginLink.innerHTML = 'Login';
    registerLink.innerHTML = 'Register';

    [loginLink, registerLink].forEach(link => {
      loginRegisterDiv.appendChild(link);
    });

    const cartActions = document.createElement('span');
    cartActions.classList.add(
      'cart',
      'd-flex',
      'align-items-center',
      'justify-content-center'
    );

    cartCol.appendChild(cartActions);

    const cartIcon = document.createElement('i');
    cartIcon.classList.add('fas', 'fa-shopping-cart', 'fa-2x');
    cartIcon.setAttribute('data-bs-toggle', 'offcanvas');
    cartIcon.setAttribute('data-bs-target', '#offcanvasExample');
    cartIcon.setAttribute('aria-controls', 'offcanvasExample');
    cartActions.appendChild(cartIcon);

    const cartMsg = document.createElement('span');
    cartMsg.innerText = '0 items';

    cartMsg.classList.add('cart-msg');
    cartActions.appendChild(cartMsg);

    row.appendChild(cartCol);
    container.appendChild(row);
    header.appendChild(container);
    this.appendChild(header);
  }
}
