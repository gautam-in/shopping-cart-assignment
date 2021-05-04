const API_URL = "http://localhost:5000";

const EMAIL_REGEX = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+[^<>()\.,;:\s@\"]{2,})$/;

class UserStore {
  constructor() {
    this.isLoggedIn = false;
  }

  isAuthenticated() {
    const isLogged =
      window.localStorage.getItem("isLoggedIn") &&
      JSON.parse(window.localStorage.getItem("isLoggedIn"));
    if (isLogged) {
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }
    return this.isLoggedIn;
  }
}

const userInfo = new UserStore();

export { API_URL, EMAIL_REGEX, userInfo };
