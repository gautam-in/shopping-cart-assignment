// class Header extends HTMLElement{
//     constructor(){
//         super();
//         this._shadowRoot = this.attachShadow({ 'mode': 'open' });
//         this._cart_count = this.getAttribute('cart-item') || 0
//         this._shadowRoot.innerHTML = 
//         `
//     }

//     attributeChangedCallback(name, oldValue, newValue) {
//         this.shadowRoot.getElementById('cart-count').innerText = newValue + ' items';
//     }

//     static get observedAttributes() { return ['cart-item']; }
// }

// customElements.define('uc-header', Header)

let itemCount = document.getElementById('cart-count');

// fetch('localhost:5000/')/
itemCount.textContent = '0 Items'