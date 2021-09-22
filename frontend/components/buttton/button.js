const CustomButtton = (name, clickHandler) => `
        <style>
            input[type=button]{
                background-color: #ab3862;
                border: none;
                color: white;
                padding: 10px 20px;
                text-decoration: none;
                cursor: pointer;
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                font-size: 18px;
            }
            @media screen and (max-width: 1200px) {
                input[type=button]{
                    padding: 5px;
                    font-size: 14px;
                }
            }
        </style>
        <input type="button" value="${name}" class="button" onclick="${clickHandler}"/>
`

class MyButton extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' })
    }

    updateStyle(elem) {
        const shadow = elem.shadowRoot;
        shadow.innerHTML = CustomButtton(elem.getAttribute('label-text'),elem.getAttribute('on-click'))
    }

    connectedCallback() {
        this.updateStyle(this)
    }
}

customElements.define("my-button", MyButton);