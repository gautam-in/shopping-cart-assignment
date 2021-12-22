import AbstractView from "./AbstractView";
import template from "../../templates/login.handlebars";
import { API_PATH, DOCUMENT_TITLE } from "../constants/constants";
import { fetchData } from "../helpers/apiService";
import { showToastMessage } from "../helpers/toast";

export default class LoginView extends AbstractView {
  constructor() {
    super();
  }

  getTemplate() {
    this.setTitle(DOCUMENT_TITLE.login);
    this.setActiveLinkIndicator("login-link");

    // template is the pre-compiled handlebars template
    return template({});
  }

  async onSubmitHandler() {
    try {
      const formData = new FormData(document.querySelector("#loginForm"));
      const credentials = {};
      for (var [key, value] of formData.entries()) {
        credentials[key] = value;
      }

      const response = await this.submitLoginData(credentials);
      if (response.status === "success") {
        showToastMessage(response.message);
        document.getElementById("loginForm").reset();
        const { firstName, lastName, email } = response;
        const loggedInUserObj = { firstName, lastName, email };
        sessionStorage.setItem("loggedInUser", JSON.stringify(loggedInUserObj));
        window.location.href = `${window.location.origin}/`;
      } else if (response.status === "failure") {
        showToastMessage(response.message, true);
      } else {
        throw new Error("Something went wrong in user login !");
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  }

  async submitLoginData(postData) {
    return fetchData(API_PATH.userLogin, "POST", postData);
  }
}
