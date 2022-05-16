import { getEle } from "../../../helpers";
import APIConfig from "../../../api/api";
import { TOKEN_KEY } from "../../../constant";

export class LoginState {
  constructor() {
    this.isValidForm = false;
    this.domElements = {
      form: null,
      formError: null,
      emailInput: null,
      emailError: null,
      passInput: null,
      passError: null,
    };
  }

  enabledButton = () => {
    if (this.isValidForm) {
      document.getElementById("login-btn").removeAttribute("disabled");
    } else {
      document.getElementById("login-btn").setAttribute("disabled", "disabled");
    }
  };

  getDOMElements = () => {
    this.domElements = {
      form: getEle("form-container"),
      formError: getEle("form-error"),
      emailInput: getEle("input-email"),
      passInput: getEle("input-password"),
      emailError: getEle("email-error"),
      passError: getEle("password-error"),
    };
    this.enabledButton();
  };

  getFormValues = (e) => {
    const formData = new FormData(e.target);
    return Object.fromEntries(formData);
  };

  emailFieldCheck = (value) => {
    const inputEle = document.getElementById("input-email");
    const inputPassEle = document.getElementById("input-password");
    const { emailError, formError } = this.domElements;
    formError.style.opacity = 0;
    formError.innerText = "";
    if (value === "") {
      emailError.style.opacity = 1;
      emailError.innerText = "Email required*";
      inputEle.classList.add("input-error");
    } else if (/^[A-Z0-9._%+-]+@[A-Z.-]+\.[A-Z]{2,4}$/i.test(value)) {
      emailError.style.opacity = 0;
      emailError.innerText = "";
      if (inputPassEle.value) {
        this.isValidForm = true;
      }
      inputEle.classList.remove("input-error");
    } else {
      emailError.style.opacity = 1;
      emailError.innerText = "Please enter valid email";
      this.isValidForm = false;
      inputEle.classList.add("input-error");
    }
  };

  passFieldCheck = (value) => {
    const inputPassEle = document.getElementById("input-password");
    const inputEle = document.getElementById("input-email");
    const { passError, formError } = this.domElements;
    formError.style.opacity = 0;
    formError.innerText = "";
    if (value === "") {
      passError.style.opacity = 1;
      passError.innerText = "Password required*";
      inputPassEle.classList.add("input-error");
    } else if (/^(?=.*\d)(?=.*[a-zA-Z]).{6,20}$/.test(value)) {
      passError.style.opacity = 0;
      passError.innerText = "";
      if (inputEle.value) {
        this.isValidForm = true;
      }
      inputPassEle.classList.remove("input-error");
    } else {
      passError.style.opacity = 1;
      passError.innerText = "Please enter valid password";
      inputPassEle.classList.add("input-error");
    }
  };

  validForm = (type, value) => {
    if (type === "email") this.emailFieldCheck(value);
    if (type === "pass") this.passFieldCheck(value);
    this.enabledButton();
  };

  onFormError = (data) => {
    let isError = false;
    const formErr = this.domElements.formError;
    if (data.errMsg) {
      formErr.style.opacity = 1;
      formErr.innerText = data.errMsg;
      formErr.focus();
      isError = true;
    } else {
      formErr.style.opacity = 0;
      formErr.innerText = "";
    }
    return isError;
  };

  setToken = (data) => {
    return new Promise((resolve) => {
      window.localStorage.setItem(TOKEN_KEY, JSON.stringify(data));
      resolve();
    });
  };

  onSubmit = async (e) => {
    console.log("__", e);
    e.preventDefault();
    const formProps = this.getFormValues(e);
    const auth = new APIConfig();
    const data = await auth.userLogin(formProps);
    let err = this.onFormError(data);
    console.log("e", data, err);
    if (data && !err) {
      await this.setToken(data);
      window.location.href = "#/home";
    }
  };

  reRender = async () => {
    this.getDOMElements();
    const { emailInput, passInput, form } = this.domElements;

    emailInput.addEventListener("input", (e) => {
      this.validForm("email", e.target.value);
    });

    passInput.addEventListener("input", (e) => {
      this.validForm("pass", e.target.value);
    });

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      this.onSubmit(e);
    });
  };
}
