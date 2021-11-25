import { SBLocalStorage } from "../services/sbLocalStorage.js";
import { Form } from "./form.js";

export class SignUp extends Form {

    constructor() {
        super();
        this.sbLocalStorage = new SBLocalStorage();
    }

    initEventListners() {
        const signupForm = document.getElementsByClassName("signup-form")[0];
        signupForm?.addEventListener('submit', (event) => {
            event.preventDefault();
            this.onSignupSubmit(signupForm);

            location.pathname = "/src/login/login.html";
        });
        const inputs = signupForm.getElementsByClassName("form-input");
        for (let index = 0; index < inputs.length; index++) {
            const element = inputs[index];
            element.addEventListener('focus', () => this.onInputFocus(element));
            element.addEventListener('blur', () => this.onInputBlur(element));
        }
    }

    onSignupSubmit(signupFormElement) {
        let signupForm = new FormData(signupFormElement);
        let signupData = {};
        for (const item of signupForm) {
            if(item[0] === "confirmPassword") continue;
            signupData[item[0]] = item[1];
        }
        let users = this.sbLocalStorage.getItem("users");
        users = users ?? [];
        users.push(signupData);
        this.sbLocalStorage.setItem("users", users);
        alert("Account created successfully!");
    }
}

const signup = new SignUp();
signup.sbLocalStorage.clear();
signup.initEventListners();