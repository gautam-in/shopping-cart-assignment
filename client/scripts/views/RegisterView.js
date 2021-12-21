import AbstractView from "./AbstractView";
import template from "../../templates/register.handlebars";
import { API_PATH, DOCUMENT_TITLE } from "../constants/constants";
import { fetchData } from "../helpers/apiService";
import { showToastMessage } from "../helpers/toast";

export default class RegisterView extends AbstractView {
  constructor() {
    super();
  }

  getTemplate() {
    this.setTitle(DOCUMENT_TITLE.register);
    this.setActiveLinkIndicator("register-link");

    // template is the pre-compiled handlebars template
    return template({});
  }

  async onSubmitHandler() {
    try {
      const formData = new FormData(document.querySelector("#registerForm"));
      const userData = {};
      for (var [key, value] of formData.entries()) {
        userData[key] = value;
      }
      delete userData.confirmPassword;

      const response = await this.submitUserSignupData(userData);
      if (response.status === "success") {
        showToastMessage(response.message);
        document.getElementById("registerForm").reset();
      } else if (response.status === "failure") {
        showToastMessage(response.message, true);
      } else {
        throw new Error("Something went wrong in user registration !");
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  }

  async submitUserSignupData(postData) {
    return fetchData(API_PATH.newUserRegistration, "POST", postData);
  }
}
