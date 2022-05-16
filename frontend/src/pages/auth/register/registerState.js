import APIConfig from "../../../api/api";
import { TOKEN_KEY } from "../../../constant";
import { getEle } from "../../../helpers";

export class RegisterState {
  constructor() {
    this.err = {
      fname: true,
      email: true,
      pass: true,
      confirmPass: true,
    };
    this.domElements = {
      form: null,
      formError: null,
      iFname: null,
      ieFname: null,
      iLastName: null,
      ieLastName: null,
      iEmail: null,
      ieEmail: null,
      iPassword: null,
      iePassword: null,
      iRePassword: null,
      ieRePassword: null,
    };
  }

  enabledButton = () => {
    let isError = Object.values(this.err).some((i) => i);
    if (!isError) {
      getEle("register-btn").removeAttribute("disabled");
    } else {
      getEle("register-btn").setAttribute("disabled", "disabled");
    }
  };

  getDOMElements = () => {
    this.domElements = {
      form: getEle("form-container"),
      formError: getEle("form-error"),
      iFname: getEle("input-fname"),
      ieFname: getEle("input-fname-error"),
      iLastName: getEle("input-lname"),
      ieLastName: getEle("input-lname-error"),
      iEmail: getEle("input-email"),
      ieEmail: getEle("input-email-error"),
      iPassword: getEle("input-password"),
      iePassword: getEle("input-password-error"),
      iRePassword: getEle("input-confirm-password"),
      ieRePassword: getEle("input-confirm-password-error"),
    };
    this.enabledButton();
  };

  validForm = ({ name, value }) => {
    const { ieFname, iFname, ieEmail, iePassword, ieRePassword } =
      this.domElements;
    switch (name) {
      case "fname":
        if (value === "") {
          ieFname.style.opacity = 1;
          ieFname.innerText = "First name required*";
          this.err.fname = true;
        } else {
          ieFname.style.opacity = 0;
          ieFname.innerText = "";
          this.err.fname = false;
        }

        break;

      case "email":
        if (value === "") {
          ieEmail.style.opacity = 1;
          ieEmail.innerText = "Email required*";
          this.err.email = true;
        } else if (/^[A-Z0-9._%+-]+@[A-Z.-]+\.[A-Z]{2,4}$/i.test(value)) {
          ieEmail.style.opacity = 0;
          ieEmail.innerText = "";
          this.err.email = false;
          document.getElementById("fname-label").classList.add("label-focus");
        } else {
          ieEmail.style.opacity = 1;
          ieEmail.innerText = "Please enter valid email";
          this.err.email = true;
        }
        break;

      case "password":
        if (value === "") {
          iePassword.style.opacity = 1;
          iePassword.innerText = "Password required*";
          this.err.pass = true;
        } else if (/^(?=.*\d)(?=.*[a-zA-Z]).{6,20}$/i.test(value)) {
          iePassword.style.opacity = 0;
          iePassword.innerText = "";
          this.err.pass = false;
        } else {
          iePassword.style.opacity = 1;
          iePassword.innerText = "Please enter valid password";
          this.err.pass = true;
        }
        break;

      case "confirm-password":
        const pasValue = document.getElementById("input-password").value;
        if (value === "") {
          ieRePassword.style.opacity = 1;
          ieRePassword.innerText = "Confirm Password required*";
          this.err.confirmPass = true;
        } else if (pasValue && value.toLowerCase() === pasValue.toLowerCase()) {
          ieRePassword.style.opacity = 0;
          ieRePassword.innerText = "";
          this.err.confirmPass = false;
        } else {
          ieRePassword.style.opacity = 1;
          ieRePassword.innerText =
            "Confirm password should be same as password";
          this.err.confirmPass = true;
        }

        break;

      default:
        break;
    }

    this.enabledButton();
  };

  getFormValues = (e) => {
    const formData = new FormData(e.target);
    return Object.fromEntries(formData);
  };

  onFormError = (data) => {
    const formErr = this.domElements.formError;
    if (data.errMsg) {
      formErr.style.opacity = 1;
      formErr.innerText = data.errMsg;
      formErr.focus();
      return true;
    } else {
      formErr.style.opacity = 0;
      formErr.innerText = "";
      return false;
    }
  };

  onSubmit = async (e) => {
    const formProps = this.getFormValues(e);
    const auth = new APIConfig();
    const data = await auth.userRegister(formProps);
    if (data && !this.onFormError(data)) {
      document.getElementById("alert-container").style.display = "flex";
      window.localStorage.setItem(TOKEN_KEY, JSON.stringify(data));
    }
  };

  reRender = async () => {
    this.getDOMElements();
    const { form, iFname, iLastName, iEmail, iPassword, iRePassword } =
      this.domElements;

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      this.onSubmit(e);
    });

    [iFname, iLastName, iEmail, iPassword, iRePassword].map((list) => {
      list.addEventListener("input", (e) => {
        console.log("e", e);
        this.validForm(e.target);
      });
    });
  };
}

window.onlo;
