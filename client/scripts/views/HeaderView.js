import { API_PATH } from "../constants/constants";
import { fetchData } from "../helpers/apiService";
import { showToastMessage } from "../helpers/toast";

export default class HeaderView {
  constructor() {}

  showOrHideCart() {
    document.querySelector(".cart-popup").classList.toggle("d-none");
    const isHide = document
      .querySelector(".cart-popup")
      .classList.contains("d-none");
    if (!isHide) {
      document.querySelector("#overlayLayer").classList.add("black-overlay");
    } else {
      document.querySelector("#overlayLayer").classList.remove("black-overlay");
    }
  }

  checkLoginStatus() {
    const loggedInUser = sessionStorage.getItem("loggedInUser");
    if (loggedInUser) {
      const parsedUser = JSON.parse(loggedInUser);

      document.querySelector(
        "#welcomeUserMsg"
      ).textContent = `Hi ${parsedUser.firstName}!`;
      const signinAndRegisterLinks = document.querySelectorAll(".auth-link");
      signinAndRegisterLinks.forEach((element) => {
        element.classList.add("d-none");
      });
      document.querySelector("#userDropdownMenu").classList.remove("d-none");
    } else {
      document.querySelector("#welcomeUserMsg").textContent = "";
      const signinAndRegisterLinks = document.querySelectorAll(".auth-link");
      signinAndRegisterLinks.forEach((element) => {
        element.classList.remove("d-none");
      });
      document.querySelector("#userDropdownMenu").classList.add("d-none");
    }
  }

  async logoutUser() {
    const loggedInUser = sessionStorage.getItem("loggedInUser");
    if (loggedInUser) {
      const parsedUser = JSON.parse(loggedInUser);
      const response = await this.logoutAPI(parsedUser.email);
      if (response.status === "success") {
        showToastMessage(response.message);
        sessionStorage.removeItem("loggedInUser");
        document.querySelector("#welcomeUserMsg").textContent = "";
        const signinAndRegisterLinks = document.querySelectorAll(".auth-link");
        signinAndRegisterLinks.forEach((element) => {
          element.classList.remove("d-none");
        });
        document.querySelector("#userDropdownMenu").classList.add("d-none");
      } else if (response.status === "failure") {
        showToastMessage(response.message, true);
      } else {
        throw new Error("Something went wrong in user logout !");
      }
    }
  }

  async logoutAPI(userEmail) {
    return fetchData(`${API_PATH.logout}?email=${userEmail}`);
  }
}
