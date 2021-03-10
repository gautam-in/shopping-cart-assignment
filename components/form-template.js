class FormTemplate extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.paramsArray = this.getAttribute('params').split(",");
        this.textsArray = this.getAttribute('texts').split(",");
        this.inputTypesArray = this.getAttribute('inputTypes').split(",");
        this.innerHTML = /*html*/`
        <div class="heading">
            <h1 class="heading__primary">
                ${this.getAttribute('primaryHeading')}
            </h1>
            <h5 class="heading__sub">
            ${this.getAttribute('subHeading')}
            </h5>
        </div>
        `;

        let formEl = document.createElement('form');
        formEl.setAttribute('method', 'POST');
        formEl.setAttribute('name', 'loginForm');
        formEl.setAttribute('novalidate', '');
        formEl.classList.add('form', 'login-form');
        this.append(formEl);

        this.paramsArray.forEach((el, i) => {
            let temp = /*html*/`
            <div class="form__input-container">
            <input type="${this.inputTypesArray[i]}" class="form__input--login" required id="${el}" name="${el}" onblur="validate(event)"
                aria-describedby="${el}Error" />
            <label for="${el}">${this.textsArray[i]}</label>
            <div class="bar"></div>
            <div id="${el}Error"></div>
         </div>
            `
            formEl.innerHTML += temp;
        });
        formEl.innerHTML += `<button class="btn form__submit" type="submit">${this.getAttribute('type')}</button>`;

    }

}

customElements.define('form-template', FormTemplate);

