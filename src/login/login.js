import { SBLocalStorage } from "../services/sbLocalStorage.js";
import { Form } from "../sign-up/form.js";

export class Login extends Form {

    constructor() {
        super();
        this.sbLocalStorage = new SBLocalStorage();
    }

    initEventListners() {
        const loginForm = document.getElementById("login-form");
        loginForm?.addEventListener('submit', (event) => {
            this.onLoginSubmit(loginForm);
            event.preventDefault();
        });
        const inputs = loginForm.getElementsByClassName("form-input");
        for (let index = 0; index < inputs.length; index++) {
            const element = inputs[index];
            element.addEventListener('focus', () => this.onInputFocus(element));
            element.addEventListener('blur', () => this.onInputBlur(element));
        }
    }

    onLoginSubmit(loginFormElement) {
        this.sbLocalStorage.setItem("user", "true");
        location.pathname = "/src/index.html";
    }
}

const login = new Login();
login.sbLocalStorage.clear();
login.initEventListners();