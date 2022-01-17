export class OffCanvas extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const offcanvasDiv = document.createElement('div');
    offcanvasDiv.setAttribute('class', 'offcanvas offcanvas-end');
    offcanvasDiv.setAttribute('tabIndex', '-1');
    offcanvasDiv.setAttribute('id', 'offcanvasExample');
    offcanvasDiv.setAttribute('aria-labelledby', 'offcanvasLabel');

    const offcanvasHeaderDiv = document.createElement('div');
    offcanvasHeaderDiv.classList.add('offcanvas-header');
    offcanvasDiv.appendChild(offcanvasHeaderDiv);

    const offcanvasTitle = document.createElement('h5');
    offcanvasTitle.setAttribute('id', 'offcanvasLabel');
    offcanvasTitle.setAttribute('class', 'offcanvas-title p-3');
    offcanvasTitle.innerText = 'My Cart';
    offcanvasHeaderDiv.appendChild(offcanvasTitle);

    const offcanvasCloseBtn = document.createElement('button');
    offcanvasCloseBtn.setAttribute(
      'class',
      'btn-close text-reset btn-close-white text-white'
    );
    offcanvasCloseBtn.setAttribute('type', 'button');
    offcanvasCloseBtn.setAttribute('data-bs-dismiss', 'offcanvas');
    offcanvasCloseBtn.setAttribute('aria-label', 'Close');
    offcanvasHeaderDiv.appendChild(offcanvasCloseBtn);

    const offcanvasBodyDiv = document.createElement('div');
    offcanvasBodyDiv.setAttribute('class', 'offcanvas-body bg-gray');
    offcanvasDiv.appendChild(offcanvasBodyDiv);

    const offcanvasPromoText = document.createElement('p');
    offcanvasPromoText.setAttribute(
      'class',
      'promo-text text-center m-0 d-none'
    );
    offcanvasPromoText.innerText = 'Promo code can be applied on payment page';
    offcanvasDiv.appendChild(offcanvasPromoText);

    const offcanvasActionButton = document.createElement('button');
    offcanvasActionButton.setAttribute(
      'class',
      'cart-shopping-action bg-theme border-0 p-4 mx-4 my-3 d-flex align-items-center justify-content-between'
    );
    offcanvasDiv.appendChild(offcanvasActionButton);

    const offcanvasActionBtnSpan = document.createElement('span');
    offcanvasActionBtnSpan.innerText = 'Start Shopping';
    offcanvasActionBtnSpan.setAttribute('class', 'cart-action-btn-text');
    offcanvasActionButton.appendChild(offcanvasActionBtnSpan);

    const offcanvasCartTotal = document.createElement('span');
    offcanvasCartTotal.setAttribute('class', 'cart-total');
    offcanvasActionButton.appendChild(offcanvasCartTotal);

    const offcanvasTotalPrice = document.createElement('span');
    offcanvasTotalPrice.setAttribute('class', 'cart-total-price');
    offcanvasCartTotal.appendChild(offcanvasTotalPrice);

    const offcanvasActionBtnIcon = document.createElement('i');
    offcanvasActionBtnIcon.setAttribute(
      'class',
      'fas fa-chevron-right text-white'
    );
    offcanvasCartTotal.appendChild(offcanvasActionBtnIcon);
    this.appendChild(offcanvasDiv);
  }
}
