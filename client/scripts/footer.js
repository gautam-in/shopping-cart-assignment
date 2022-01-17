export class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const footer = document.createElement('footer');
    footer.classList.add('footer', 'bg-gray');
    const footerDiv = document.createElement('div');
    footer.appendChild(footerDiv);
    footerDiv.classList.add('container');
    footerDiv.innerHTML =
      'Copyright &copy; 2011 - 2018 Sabka Bazaar Grocery Supplies Pvt Ltd';
    this.appendChild(footer);
  }
}
