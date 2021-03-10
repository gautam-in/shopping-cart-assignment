class CategoryTemplate extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {


        this.innerHTML = /*html*/`
        <section class="${this.getAttribute('flexDirection')} category">
        <figure>
        <img src="../static/images/category/${this.getAttribute('imgSrc')}.png" alt="${this.getAttribute('imgAlt')}" class="category-logo" />
        </figure>
        <div class="flex-column category-detail">
            <h1 class="category-detail__main">${this.getAttribute('mainText')}</h1>
            <h2 class="category-detail__sub">
            ${this.getAttribute('subText')}
            </h2>
            <button class="btn" onclick="location.href='products.html'+ '${this.getAttribute('buttonFragment')}' ">
            ${this.getAttribute('buttonText')}</button>
        </div>
        </section>
        `
    }


}

customElements.define('category-template', CategoryTemplate);







